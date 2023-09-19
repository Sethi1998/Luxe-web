import { LocationIcon } from "@/icons/LocationIcon";
import React from "react";

export const CitySearch = () => {
  return (
    <div className="lg:w-[300px] h-[50px] flex rounded-full border border-[#AAA] items-center jsutify-center px-4 gap-6">
      <LocationIcon />
      <input
        className="text-primary font-semibold w-full border-none outline-none"
        placeholder="City, airport,address or hotel"
      />
    </div>
  );
};
