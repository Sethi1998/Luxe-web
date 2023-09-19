import { LocationIcon } from "@/icons/LocationIcon";
import React from "react";

export const CitySearch = () => {
  return (
    <div className=" w-[300px] h-[65px] flex rounded-full border border-[#AAA] items-center jsutify-center px-10 gap-6 lg:w-[362px] ">
      <LocationIcon />
      <input
        className="text-primary font-semibold w-full border-none outline-none"
        placeholder="City, airport,address or hotel"
      />
    </div>
  );
};
