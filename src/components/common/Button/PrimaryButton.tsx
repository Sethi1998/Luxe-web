import Link from "next/link";

export interface ButtonProp {
  label: string;
  link?: string;
  type?: ButtonType;
}

enum ButtonType {
  button = "button",
  submit = "submit",
}
export const PrimaryButton = ({ label, type, link }: ButtonProp) => {
  return (
    <Link className="flex w-[146px] h-[48px] rounded-xl bg-primary text-white items-center justify-center text-base " href={link || ""}>
      {label}
    </Link>
  );
};
