import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryInput } from "../common/SecondaryInput";
import { RSelect } from "../common/RSelect";
import { SecondaryButton } from "../common/Button/SecondaryButton";
import { StepProp } from "./Step1";
import { FileUpload } from "../common/FileUpload";

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
export const Step3 = ({ formStep, setFormStep }: StepProp) => {
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
          step3: false,
          step4: true,
        })
      }
    >
      <div className="lg:grid grid-cols-2 gap-4 w-full flex flex-col gap-4">
        <RSelect
          name="fuel"
          label="Discount"
          register={register}
          option={[]}
          defaultOption="Select Discount"
        />
        <SecondaryInput
          label="Discount Amount"
          name="discount"
          type="number"
          error={errors.email?.message}
          register={register}
        />
      </div>
      <SecondaryInput
        label="Amount per day"
        name="discount"
        type="number"
        error={errors.email?.message}
        register={register}
      />
      <FileUpload label="Insurance & Protection" />
      <SecondaryButton label="Next" />
    </form>
  );
};
