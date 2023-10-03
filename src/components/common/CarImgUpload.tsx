import Image from "next/image";
import { useRef } from "react";

interface FileProp {
  label: string;
  img: string;
  handleChange: (value: any) => void;
  imgData: string;
}
export const CarImgUplaod = ({
  label,
  img,
  handleChange,
  imgData,
}: FileProp) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white text-black rounded-xl w-[200px] h-[150px]">
      <div className="flex flex-col gap-4 items-center p-2 ">
        <input type="file" ref={inputRef} hidden onChange={handleChange} />
        <h2 className="text-sm">{label}</h2>
        {imgData ? (
          imgData
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
  );
};
