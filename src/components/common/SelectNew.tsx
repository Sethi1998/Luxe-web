import React from "react";
interface SelectProps {
  label: string;
  name?: string;
  option: any;
  defaultOption: string;
}
export const SelectNew = ({
  label,
  name,
  defaultOption,
  option,
}: SelectProps) => {
  return (
    <div>
      <div className="border-2 rounded p-2 bg-white text-black">
        <select
          className="outline-none w-full border-none bg-transparent"
          name={name}
        >
          <option defaultChecked>{defaultOption}</option>
          {option.map((item: any) => (
            <>
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            </>
          ))}
        </select>
      </div>
    </div>
  );
};
