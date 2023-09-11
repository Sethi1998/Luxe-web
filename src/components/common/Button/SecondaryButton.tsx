import React from "react";

export interface ButtonProp {
  label: string;
  link?: string;
}

export const SecondaryButton = ({ label }: ButtonProp) => {
  return (
    <button className="flex p-2  bg-transparent text-black items-center border border-black justify-center text-base">
      {label}
    </button>
  );
};
