import React from "react";
interface SelectProps {
  label: string;
  name?: string;
  error?: string;
  register?: any;
  option: any;
  setValue: (data: any) => void;
  setError: (data: any) => void;
}
export const RSelect = ({
  label,
  name,
  error,
  setValue,
  setError,
  option,
}: SelectProps) => {
  return (
    <div>
      <label>{label}</label>
      <div className="border-2 rounded p-2 bg-white text-black">
        <select
          className="outline-none w-full border-none bg-transparent"
          name={name}
          aria-invalid={error ? "true" : "false"}
          onChange={(e) => {
            setValue(e.target.value);
            setError("");
          }}
        >
          <option disabled selected>
            Select Your Option
          </option>
          {option.map((item: any) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <p className="p-1 text-red-500 font-semibold">{error && error}</p>
    </div>
  );
};
