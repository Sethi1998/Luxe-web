import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryInput } from "../common/SecondaryInput";
import { RSelect } from "../common/RSelect";
import { SecondaryButton } from "../common/Button/SecondaryButton";
import { apiHandler } from "@/services/api";
import {
  addVehicle,
  getCompanies,
  getSubCategories,
  getVehiclesType,
} from "@/services/api/constants";
import {
  VehicleCompany,
  VehicleModel,
  VehicleType,
  colors,
  trim,
  years,
} from "./types";
import { Step1Schema } from "./stepSchema";
import {
  LoadScript,
  Autocomplete,
  useJsApiLoader,
} from "@react-google-maps/api";
import { LocationIcon } from "@/icons/LocationIcon";
import toast from "react-hot-toast";
import { CMSModal } from "@/context";
export interface StepProp {
  formStep: any;
  setFormStep: (value: any) => void;
  formData: any;
  setFormData: (value: any) => void;
}

export interface STEP1 {
  address: string;
  year: string;
  make: string;
  category: string;
  model: string;
  color: string;
  trim: string;
  vinNumber: string;
}
export const Step1 = ({
  formStep,
  setFormStep,
  formData,
  setFormData,
}: StepProp) => {
  const { setLoading } = useContext(CMSModal);
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [vehicleCompanies, setVehicleCompanies] = useState<VehicleCompany[]>(
    []
  );
  const [vehicleModel, setVehicleModel] = useState<VehicleModel[]>([]);
  const [autocomplete, setAutocomplete] = useState<any>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
    watch,
  } = useForm({ resolver: yupResolver(Step1Schema) });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string,
    libraries: ["places"],
  });
  const vehcileCompanyWatch = watch("make");
  useEffect(() => {
    fetchVehicleTypes();
    fetchVehicleCategory();
  }, []);

  useEffect(() => {
    vehcileCompanyWatch && fetchVehicleSubCategory(vehcileCompanyWatch);
  }, [vehcileCompanyWatch]);

  const handlePlaceSelect = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();

      if (place) {
        // Access the postal code from the place object
        const addressName = place.address_components.find((component: any) =>
          component.types.includes("locality")
        );
        setValue("address", addressName?.long_name);
        setError('address',addressName)
        const cityName = place.address_components.find((component: any) =>
          component.types.includes("administrative_area_level_3")
        );
        setValue("city", cityName?.long_name);

        const state = place.address_components.find((component: any) =>
          component.types.includes("administrative_area_level_1")
        );
        setValue("state", state?.long_name);

        const postalCode = place.address_components.find((component: any) =>
          component.types.includes("postal_code")
        );
        setValue("postalCode", postalCode?.long_name);
      }
    }
  };

  const fetchVehicleTypes = async () => {
    const res = await apiHandler(`${getVehiclesType}`, "GET");
    setVehicleTypes(res.data.data);
  };
  const fetchVehicleCategory = async () => {
    const res = await apiHandler(`${getCompanies}`, "GET");
    setVehicleCompanies(res.data.data);
  };
  const fetchVehicleSubCategory = async (category: string) => {
    const res = await apiHandler(
      `${getSubCategories}?filter=${category}`,
      "GET"
    );
    setVehicleModel(res.data.data);
  };
  const vehicleTypeSelect = vehicleTypes.map((item) => ({
    value: item._id,
    label: item.vehicleTypeName,
  }));
  const vehicleCompany = vehicleCompanies.map((item) => ({
    value: item._id,
    label: item.companyName,
  }));
  const vehicleColors = colors.map((item) => ({
    value: item,
    label: item,
  }));
  const vehicleYears = years.map((item) => ({
    value: item,
    label: item,
  }));
  const models = vehicleModel?.map((item) => ({
    value: item._id,
    label: item.subCategoryName,
  }));

  const submitHandler = async (data: STEP1) => {
    setLoading(true);
    const input = {
      ...data,
      step: "1",
    };
    const res = await apiHandler(`${addVehicle}`, "POST", input);
    if (res.data.success) {
      setLoading(false);
      setFormData(res.data.data);
      toast.success(res.data.message);
      setFormStep({
        ...formStep,
        step1: false,
        step2: true,
      });
    } else {
      setLoading(false);
      toast.error(res.data.message);
    }
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit((data) => submitHandler(data))}
    >
      <div>
        <label>Where is your car located?</label>

        {isLoaded && (
          <Autocomplete
            onLoad={(autocomplete) => setAutocomplete(autocomplete)}
            onPlaceChanged={handlePlaceSelect}
          >
            <div className="flex gap-4 bg-white p-2 rounded text-black items-center">
              <input
                placeholder="Where is your car located"
                className="w-full outline-none"
              />
              <LocationIcon />
            </div>
          </Autocomplete>
        )}

        <p className="p-1 text-red-500 font-semibold">
          {errors?.address?.message}
        </p>
      </div>
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <RSelect
          name="category"
          label="Select Vehicle Type?"
          option={vehicleTypeSelect}
          error={errors?.category?.message}
          setValue={(data) => setValue("category", data)}
          setError={(data) => setError("category", data)}
        />
        <RSelect
          name="year"
          label="Year of Vehicle?"
          error={errors?.year?.message}
          setValue={(data) => setValue("year", data)}
          setError={(data) => setError("year", data)}
          option={vehicleYears}
        />
      </div>
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <RSelect
          name="make"
          label="Make"
          setValue={(data) => setValue("make", data)}
          setError={(data) => setError("make", data)}
          option={vehicleCompany}
          error={errors?.make?.message}
        />
        <RSelect
          name="model"
          label="Select Vehicle Model"
          setValue={(data) => setValue("model", data)}
          setError={(data) => setError("model", data)}
          option={models || []}
          error={errors?.model?.message}
        />
      </div>
      <div className="lg:grid grid-cols-2 gap-6 w-full flex flex-col gap-4">
        <RSelect
          name="trim"
          label="Select Trim"
          setValue={(data) => setValue("trim", data)}
          setError={(data) => setError("trim", data)}
          option={trim}
          error={errors?.trim?.message}
        />
        <RSelect
          name="color"
          label="Select Vehicle Color"
          setValue={(data) => setValue("color", data)}
          setError={(data) => setError("color", data)}
          option={vehicleColors}
          error={errors?.color?.message}
        />
      </div>
      <SecondaryInput
        label="VIN Number"
        name="vinNumber"
        type="text"
        error={errors.vinNumber?.message}
        register={register}
      />
      <div className="flex gap-4">
        <SecondaryButton label="Next" />
      </div>
    </form>
  );
};
