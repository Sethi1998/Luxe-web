import { apiHandler } from "@/services/api";
import { imgUpload } from "@/services/api/constants";
import Image from "next/image";
import { useRef, useState } from "react";

interface FileProp {
  label: string;
  img: string;
  setValue: (value: string) => void;
  error?: string;
}
export const CarImgUplaod = ({ label, img, setValue, error }: FileProp) => {
  const [imgData, setImgData] = useState<any>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadImage = async (data: any) => {
    const formData = new FormData();
    formData.append("files", data);
    const res = await apiHandler(`${imgUpload}`, "POST", formData);
    setValue(res.data.data[0]);
  };

  return (
    <div className="flex flex-col text-center">
      <div className="bg-white text-black rounded-xl w-[200px] h-[150px]">
        <div className="flex flex-col gap-4 items-center p-2">
          <input
            type="file"
            ref={inputRef}
            hidden
            onChange={(e: any) => {
              const files = e.target.files[0];
              setImgData(files);
              uploadImage(files);
            }}
          />
          <h2 className="text-sm font-semibold">{label}</h2>
          {imgData.name ? (
            <h2 className="mt-6 text-center">{imgData.name}</h2>
          ) : (
            <Image
              src={img}
              width={100}
              height={200}
              alt="upload"
              className="h-[70px] w-[100px] cursor-pointer"
              onClick={() => inputRef.current?.click()}
            />
          )}
        </div>
      </div>
      <p className="p-1 text-red-500 font-semibold">{error && error}</p>
    </div>
  );
};
