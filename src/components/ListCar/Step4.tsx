import React, { useState } from "react";
import { StepProp } from "./Step1";
import { FileUpload } from "../common/FileUpload";
import { SecondaryButton } from "../common/Button/SecondaryButton";
import { CarImgUplaod } from "../common/CarImgUpload";

export const Step4 = ({ formStep, setFormStep }: StepProp) => {
  const [images, setImages] = useState({
    front: { name: "", size: "", type: "" },
    left: { name: "", size: "", type: "" },
    right: { name: "", size: "", type: "" },
    back: { name: "", size: "", type: "" },
    interior: { name: "", size: "", type: "" },
    dashboard: { name: "", size: "", type: "" },
  });
  console.log(images, "images");

  return (
    <form className="flex flex-col gap-4 items-center">
      <div className="flex flex-col lg:grid grid-cols-2 gap-8 items-center">
        <CarImgUplaod
          label="Upload Front image"
          img="/front_view_car.jpg"
          imgData={images.front.name}
          handleChange={(e) =>
            setImages({
              ...images,
              front: e.target.files[0],
            })
          }
        />
        <CarImgUplaod
          label="Uplaod Left image"
          img="/left_view_car.jpg"
          imgData={images.left.name}
          handleChange={(e) =>
            setImages({
              ...images,
              left: e.target.files[0],
            })
          }
        />
        <CarImgUplaod
          label="Upload Right image"
          img="/right_view_car.jpg"
          imgData={images.right.name}
          handleChange={(e) =>
            setImages({
              ...images,
              right: e.target.files[0],
            })
          }
        />
        <CarImgUplaod
          label="Uplaod Back image"
          img="/back_view_car.jpg"
          imgData={images.back.name}
          handleChange={(e) =>
            setImages({
              ...images,
              back: e.target.files[0],
            })
          }
        />
        <CarImgUplaod
          label="Uplaod Interior image"
          img="/dashbaord.jpeg"
          imgData={images.dashboard.name}
          handleChange={(e) =>
            setImages({
              ...images,
              interior: e.target.files[0],
            })
          }
        />
        <CarImgUplaod
          label="Uplaod Back Seat image"
          img="/interior.jpg"
          imgData={images.interior.name}
          handleChange={(e) =>
            setImages({
              ...images,
              dashboard: e.target.files[0],
            })
          }
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label>Description</label>
        <textarea />
      </div>
      <SecondaryButton label="Submit" />
    </form>
  );
};
