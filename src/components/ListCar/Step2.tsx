import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryInput } from "../common/SecondaryInput";
import { RSelect } from "../common/RSelect";
import { SecondaryButton } from "../common/Button/SecondaryButton";
import { StepProp } from "./Step1";
const EmailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Min password length is 8")
    .required("Password is required"),
});
export const Step2 = ({ formStep, setFormStep }: StepProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EmailSchema) });
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={() =>
        setFormStep({
          ...formStep,
          step2: false,
          step3: true,
        })
      }
    >
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <SecondaryInput
          label="VIN Number"
          name="vinNumber"
          type="text"
          error={errors.email?.message}
          register={register}

        />
        <SecondaryInput
          label="Number of doors"
          name="doors"
          type="number"
          error={errors.email?.message}
          register={register}
          
        />
      </div>
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <SecondaryInput
          label="Number of seat"
          name="seat"
          type="number"
          error={errors.email?.message}
          register={register}
        
        />
        <RSelect
          name="fuel"
          label="Fuel Type"
          register={register}
          option={[]}
          defaultOption="Select Fuel"
        />
      </div>
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <RSelect
          name="vehicleCompany"
          label="Model"
          register={register}
          option={[]}
          defaultOption="Select Model"
        />
        <RSelect
          name="vehicleName"
          label="Engine"
          register={register}
          defaultOption="Select Engine"
          option={[]}
        />
      </div>
      <SecondaryButton label="Next" />
    </form>
  );
};
