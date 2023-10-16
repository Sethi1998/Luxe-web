import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SecondaryInput } from "../common/SecondaryInput";
import { SecondaryButton } from "../common/Button/SecondaryButton";
import { StepProp } from "./Step1";
import { FileUpload } from "../common/FileUpload";
import { Step3Schema } from "./stepSchema";
import { CMSModal } from "@/context";
import { apiHandler } from "@/services/api";
import { addVehicle } from "@/services/api/constants";
import toast from "react-hot-toast";

interface Step3 {
  discount: string;
  discountAmount: string;
  amount: string;
  insurance: {};
}
export const Step3 = ({ formStep, setFormStep, formData }: StepProp) => {
  const { setLoading } = useContext(CMSModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(Step3Schema) });
  const submitHandler = async (data: Step3) => {
    setLoading(true);
    const input = {
      ...data,
      step: "3",
      _id: formData._id,
    };
    const res = await apiHandler(`${addVehicle}`, "POST", input);
    if (res.data.success) {
      setLoading(false);
      toast.success(res.data.message);
      setFormStep({
        ...formStep,
        step3: false,
        step4: true,
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
          label="Discount"
          name="discount"
          type="number"
          error={errors.discount?.message}
          register={register}
        />
        <SecondaryInput
          label="Discount Amount"
          name="discountAmount"
          type="number"
          error={errors.discountAmount?.message}
          register={register}
        />
      </div>
      <SecondaryInput
        label="Amount per day"
        name="amount"
        type="number"
        error={errors.amount?.message}
        register={register}
      />
      <FileUpload
        label="Insurance & Protection"
        setValue={(data) => setValue("insurance", data)}
        name="insurance"
      />
      <p className="p-1 text-red-500 font-semibold">
        {errors.insurance?.message}
      </p>
      <SecondaryButton label="Next" />
    </form>
  );
};
