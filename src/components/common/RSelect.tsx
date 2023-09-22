import React from "react";
interface SelectProps {
  label: string;
  name?: string;
  error?: string;
  register?: any;
  option: any;
  defaultOption: string;
}
export const RSelect = ({ label, name, error, register,defaultOption,option }: SelectProps) => {
  return (
    <div>
      <label>{label}</label>
      <div className="border-2 rounded p-2 bg-white text-black">
        <select
          className="outline-none w-full border-none bg-transparent"
          name={name}
          aria-invalid={error ? "true" : "false"}
          {...register(name)}
        >
          <option defaultChecked>{defaultOption}</option>
          <option>BMW</option> <option>Mercedes</option>
        </select>
      </div>
      <p className="p-1 text-red-500 font-semibold">{error && error}</p>
    </div>
  );
};
