import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryInput } from "../common/SecondaryInput";
import { RSelect } from "../common/RSelect";
import { SecondaryButton } from "../common/Button/SecondaryButton";
import { apiHandler } from "@/services/api";
import {
  getCompanies,
  getSubCategories,
  getVehicleTypes,
} from "@/services/api/constants";
import { VehicleCompany, VehicleModel, VehicleType, colors, years } from "./types";
import { Step1Schema } from "./stepSchema";
export interface StepProp {
  formStep: any;
  setFormStep: (value: any) => void;
  formData: any;
  setFormData: (value: any) => void;
}

export const Step1 = ({
  formStep,
  setFormStep,
  formData,
  setFormData,
}: StepProp) => {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [vehicleCompanies, setVehicleCompanies] = useState<VehicleCompany[]>(
    []
  );
  const [vehicleModel, setVehicleModel] = useState<VehicleModel[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(Step1Schema) });
  const vehcileCompanyWatch = watch("make");
  console.log(vehcileCompanyWatch, "companyWatch");

  useEffect(() => {
    fetchVehicleTypes();
    fetchVehicleCategory();
  }, []);
  useEffect(() => {
    fetchVehicleSubCategory(vehcileCompanyWatch);
  }, [vehcileCompanyWatch]);

  const fetchVehicleTypes = async () => {
    const res = await apiHandler(`${getVehicleTypes}`, "GET");
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
  const models =vehicleModel?.map((item) => ({
    value: item._id,
    label: item.subCategoryName,
  }));

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={() =>
        setFormStep({
          ...formStep,
          step1: false,
          step2: true,
        })
      }
    >
      <SecondaryInput
        label="Where is the car located"
        name="location"
        type="text"
        error={errors.address?.message}
        register={register}
        img="/locationblk.png"
      />
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <RSelect
          name="vehicleType"
          label="Select Vehicle Type?"
          register={register}
          option={vehicleTypeSelect}
          defaultOption="Select Vehicle Type"
        />
        <RSelect
          name="vehicleName"
          label="Year of Vehicle?"
          register={register}
          defaultOption="Select Year"
          option={vehicleYears}
        />
      </div>
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <RSelect
          name="make"
          label="Make"
          register={register}
          option={vehicleCompany}
          defaultOption="Select Make"
        />
        <RSelect
          name="model"
          label="Select Vehicle Model"
          register={register}
          option={models||[]}
          defaultOption="Select Vehicle Model"
        />
      </div>
      <div className="lg:grid grid-cols-2 gap-6 w-full flex flex-col gap-4">
        <SecondaryInput
          label="Trim"
          name="trim"
          type="text"
          error={errors.trim?.message}
          register={register}
        />
        <RSelect
          name="color"
          label="Select Vehicle Color"
          register={register}
          option={vehicleColors}
          defaultOption="Select Vehicle Color"
        />
      </div>
      <div className="flex gap-4">
        <SecondaryButton label="Back" type="button" />
        <SecondaryButton label="Next" />
      </div>
    </form>
  );
};
