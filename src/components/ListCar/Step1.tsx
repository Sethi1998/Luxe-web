import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryInput } from "../common/SecondaryInput";
import { RSelect } from "../common/RSelect";
import { SecondaryButton } from "../common/Button/SecondaryButton";
export interface StepProp {
  formStep: any;
  setFormStep: (value: any) => void;
  formData: any;
  setFormData: (value: any) => void;
}
const EmailSchema = yup.object().shape({
  location: yup.string().required("Location is required"),
  vehicleCompany: yup.string().required("Company is required"),
  vehicleYear: yup.number().required("Company is required"),
});
export const Step1 = ({
  formStep,
  setFormStep,
  formData,
  setFormData,
}: StepProp) => {
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
          step1: false,
          step2: true,
        })
      }
    >
      <SecondaryInput
        label="Where is the car located"
        name="location"
        type="text"
        error={errors.location?.message}
        register={register}
        img="/locationblk.png"
      />
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <RSelect
          name="vehicleCompany"
          label="Which Company Car you have?"
          register={register}
          option={[]}
          defaultOption="Select Vehicle Company"
        />
        <RSelect
          name="vehicleName"
          label="Year of Vehicle ?"
          register={register}
          defaultOption="Select Year"
          option={[]}
        />
      </div>
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <RSelect
          name="make"
          label="Make"
          register={register}
          option={[]}
          defaultOption="Select Year"
        />
        <SecondaryInput
          label="Plate Number"
          name="plateNumber"
          type="text"
          error={errors.location?.message}
          register={register}
        />
      </div>
      <div className="lg:grid grid-cols-2 gap-6 w-full flex flex-col gap-4">
        <SecondaryInput
          label="Trim"
          name="trim"
          type="text"
          error={errors.location?.message}
          register={register}
        />
        <SecondaryInput
          label="Color"
          name="color"
          type="text"
          error={errors.location?.message}
          register={register}
        />
      </div>
      <div className="flex gap-4">
        <SecondaryButton label="Back" type="button" />
        <SecondaryButton label="Next" />
      </div>
    </form>
  );
};
