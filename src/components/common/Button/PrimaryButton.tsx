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
    <button className="flex p-2 rounded-xl bg-primary text-white items-center justify-center text-base w-full" type={type}>
      {label}
    </button>
  );
};
