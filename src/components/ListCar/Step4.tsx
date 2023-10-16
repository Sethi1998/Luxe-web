import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StepProp } from "./Step1";
import { FileUpload } from "../common/FileUpload";
import { SecondaryButton } from "../common/Button/SecondaryButton";
import { CarImgUplaod } from "../common/CarImgUpload";
import { CMSModal } from "@/context";
import { Step4Schema } from "./stepSchema";
import { apiHandler } from "@/services/api";
import { addVehicle } from "@/services/api/constants";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface STEP4 {
  frontImage: string;
  backImage: string;
  rightImage: string;
  leftImage: string;
  interiorImage: string;
  backSeat: string;
  description?: string;
}
export const Step4 = ({ formStep, setFormStep, formData }: StepProp) => {
  const { setLoading } = useContext(CMSModal);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(Step4Schema) });
  const submitHandler = async (data: STEP4) => {
    setLoading(true);

    const images = [
      data.frontImage,
      data.leftImage,
      data.rightImage,
      data.backImage,
      data.interiorImage,
      data.backSeat,
    ];
    const input = {
      images: images,
      description: data.description,
      step: "4",
      _id: formData._id,
    };
    const res = await apiHandler(`${addVehicle}`, "POST", input);
    if (res.data.success) {
      setLoading(false);
      toast.success(res.data.message);
      setFormStep({
        ...formStep,
        step5: true,
        step4: false,
      });
    } else {
      setLoading(false);
      toast.error(res.data.message);
    }
  };
  return (
    <form
      className="flex flex-col gap-4 items-center"
      onSubmit={handleSubmit((data) => submitHandler(data))}
    >
      <div className="flex flex-col lg:grid grid-cols-2 gap-8 items-center">
        <CarImgUplaod
          label="Upload Front image"
          img="/front_view_car.jpg"
          setValue={(data) => setValue("frontImage", data)}
          error={errors.frontImage?.message}
        />
        <CarImgUplaod
          label="Upload Left image"
          img="/left_view_car.jpg"
          setValue={(data) => setValue("leftImage", data)}
          error={errors.leftImage?.message}
        />
        <CarImgUplaod
          label="Upload Right image"
          img="/right_view_car.jpg"
          setValue={(data) => setValue("rightImage", data)}
          error={errors.rightImage?.message}
        />
        <CarImgUplaod
          label="Upload Back image"
          img="/back_view_car.jpg"
          setValue={(data) => setValue("backImage", data)}
          error={errors.backImage?.message}
        />
        <CarImgUplaod
          label="Upload Interior image"
          img="/dashbaord.jpeg"
          setValue={(data) => setValue("interiorImage", data)}
          error={errors.interiorImage?.message}
        />
        <CarImgUplaod
          label="Upload Back Seat image"
          img="/interior.jpg"
          setValue={(data) => setValue("backSeat", data)}
          error={errors.backSeat?.message}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label>Description</label>
        <textarea
          className="rounded-xl min-h-[100px] text-black p-2"
          {...register("description")}
        />
      </div>
      <SecondaryButton label="Submit" />
    </form>
  );
};
