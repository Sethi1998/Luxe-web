import React, { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryInput } from "../common/SecondaryInput";
import { RSelect } from "../common/RSelect";
import { SecondaryButton } from "../common/Button/SecondaryButton";
import { StepProp } from "./Step1";
import { Step2Schema } from "./stepSchema";
import { doors, fuelType, odometer, seats, transmission } from "./types";
import { apiHandler } from "@/services/api";
import { addVehicle } from "@/services/api/constants";
import toast from "react-hot-toast";
import { CMSModal } from "@/context";

export interface STEP2 {
  plateNumber: string;
  door: string;
  seat: string;
  transmission: string;
  odometer: string;
  fuelType: string;
}
export const Step2 = ({ formStep, setFormStep, formData }: StepProp) => {
  const { setLoading } = useContext(CMSModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Step2Schema) });

  const submitHandler = async (data: STEP2) => {
    setLoading(true);
    const input = {
      ...data,
      step: "2",
      _id: formData._id,
    };
    const res = await apiHandler(`${addVehicle}`, "POST", input);
    if (res.data.success) {
      setLoading(false);
      toast.success(res.data.message);
      setFormStep({
        ...formStep,
        step2: false,
        step3: true,
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
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <SecondaryInput
          label="Plate Number"
          name="plateNumber"
          type="text"
          error={errors.plateNumber?.message}
          register={register}
        />
        <RSelect
          name="door"
          label="Number of Doors"
          register={register}
          option={doors}
          error={errors?.door?.message}
        />
      </div>
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <RSelect
          name="seat"
          label="Number of Seats"
          register={register}
          option={seats}
          error={errors?.seat?.message}
        />
        <RSelect
          name="fuelType"
          label="Fuel Type"
          register={register}
          option={fuelType}
          error={errors?.fuelType?.message}
        />
      </div>
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <RSelect
          name="transmission"
          label="Transmission"
          register={register}
          option={transmission}
          error={errors?.transmission?.message}
        />
        <RSelect
          name="odometer"
          label="Odometer"
          register={register}
          option={odometer}
          error={errors?.odometer?.message}
        />
      </div>
      <SecondaryButton label="Next" />
    </form>
  );
};
