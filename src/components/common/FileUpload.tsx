import Image from "next/image";
import { useRef } from "react";

interface FileProp {
  label: string;
  handleChange: (value: any) => void;
  imgData: string;
}
export const FileUpload = ({ label, handleChange, imgData }: FileProp) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <div className="flex rounded-xl border border-dashed p-4 w-[200px] justify-center">
        <input type="file" ref={inputRef} hidden onChange={handleChange} />
        <span
          className="flex gap-2 text-center items-center cursor-pointer"
          onClick={() => inputRef.current?.click()}
        >
          {imgData ? (
            imgData
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
