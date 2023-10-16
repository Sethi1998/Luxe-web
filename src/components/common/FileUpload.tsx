import { apiHandler } from "@/services/api";
import { imgUpload } from "@/services/api/constants";
import Image from "next/image";
import { useRef, useState } from "react";

interface FileProp {
  label: string;
  name: string;
  setValue: (value: string) => void;
}
export const FileUpload = ({ label, setValue }: FileProp) => {
  const [imgData, setImgData] = useState<any>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadImage = async (data: any) => {
    const formData = new FormData();
    formData.append("files", data);
    const res = await apiHandler(`${imgUpload}`, "POST", formData);
    setValue(res.data.data[0]);
  };
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <div className="flex rounded-xl border border-dashed p-4 w-[200px] justify-center">
        <input
          type="file"
          ref={inputRef}
          hidden
          onChange={(e: any) => {
            const files = e.target.files[0];
            setImgData(e.target.files[0]);
            uploadImage(files);
          }}
        />
        <span
          className="flex gap-2 text-center items-center cursor-pointer"
          onClick={() => inputRef.current?.click()}
        >
          {imgData.name ? (
            imgData.name
          ) : (
            <>
              <Image src="/Icon.png" width={20} height={20} alt="upload" />
              <h2>Upload Images</h2>
            </>
          )}
        </span>
      </div>
    </div>
  );
};
