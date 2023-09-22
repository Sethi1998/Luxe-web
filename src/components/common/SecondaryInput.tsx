import Image from "next/image";
import React from "react";
interface InputProps {
  label: string;
  name?: string;
  error?: string;
  register?: any;
  type: string;
  img?: string;
}
export const SecondaryInput = ({
  label,
  type,
  name,
  error,
  register,
  img,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold">{label}</label>
      <div className="flex border-2 rounded p-2 items-center bg-white">
        <input
          name={label}
          placeholder={label}
          aria-invalid={error ? "true" : "false"}
          {...register(name)}
          type={type}
          className="border-none outline-none w-full text-black "
        />
        {img && (
          <Image
            src={img}
            width={15}
            height={15}
            alt="location"
            className="w-[15px] h-[22px]"
          />
        )}
      </div>
      <p className="p-1 text-red-500 font-semibold">{error && error}</p>
    </div>
  );
};
