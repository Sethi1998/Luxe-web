import React, { useContext } from "react";
import { StepProp } from "./Step1";
import { PrimaryButton } from "../common/Button/PrimaryButton";
import { SecondaryButton } from "../common/Button/SecondaryButton";
import { apiHandler } from "@/services/api";
import { updateVehicle } from "@/services/api/constants";
import Link from "next/link";
import { CMSModal } from "@/context";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export const Step5 = ({ formStep, setFormStep, formData }: StepProp) => {
  const { setLoading } = useContext(CMSModal);
  const router = useRouter();
  const publishVehicle = async () => {
    const input = {
      _id: formData._id,
      publish: true,
    };
    const res = await apiHandler(`${updateVehicle}`, "POST", input);
    if (res.data.success) {
      setLoading(false);
      toast.success(res.data.message);
      setFormStep({
        ...formStep,
        step1: true,
        step5: false,
      });
      router.push("/vehicles/listing");
    } else {
      setLoading(false);
      toast.error(res.data.message);
    }
  };
  return (
    <div className="flex flex-col font-semibold gap-4">
      <h2 className="text-center">Please Confirm to publish the vehicle</h2>
      <div className="flex gap-4 justify-center">
        <span onClick={publishVehicle}>
          <SecondaryButton label="Publish" />
        </span>
        <Link href="/vehicles/listing">
          <SecondaryButton label="Cancel" />
        </Link>
      </div>
    </div>
  );
};
