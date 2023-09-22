import React from "react";
import { StepProp } from "./Step1";
import { FileUpload } from "../common/FileUpload";
import { SecondaryButton } from "../common/Button/SecondaryButton";

export const Step4 = ({ formStep, setFormStep }: StepProp) => {
  return (
    <form className="flex flex-col gap-4">
      <FileUpload label="Upload Car Images" />
      <div className="flex flex-col gap-2">
        <label>Description</label>
        <textarea  />
      </div>
      <SecondaryButton label="Submit" />
    </form>
  );
};
