import Link from "next/link";

export interface ButtonProp {
  label: string;
  link?: string;
  type?: ButtonType;
}

export enum ButtonType {
  button = "button",
  submit = "submit",
}
export const PrimaryButton = ({ label, type, link }: ButtonProp) => {
  return (
    <button className="flex p-3 rounded-xl bg-primary text-white items-center justify-center text-xs w-full lg:text-base" type={type}>
      {label}
    </button>
  );
};
