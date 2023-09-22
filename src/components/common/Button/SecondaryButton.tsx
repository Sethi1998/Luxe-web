import React from "react";

export interface ButtonProp {
  label: string;
  type?: any;
}

export const SecondaryButton = ({ label, type }: ButtonProp) => {
  return (
    <button
      className="flex p-2 bg-white rounded-xl text-black items-center border border-black justify-center text-base w-full"
      type={type}
    >
      {label}
    </button>
  );
};
