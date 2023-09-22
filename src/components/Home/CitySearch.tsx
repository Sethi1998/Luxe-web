import { LocationIcon } from "@/icons/LocationIcon";
import React from "react";
import { usePlacesWidget } from "react-google-autocomplete";

export interface CitySearchProp {
  setSearchField: (value: any) => void;
  searchField?: any;
}
export const CitySearch = ({ setSearchField, searchField }: CitySearchProp) => {
  const { ref }: any = usePlacesWidget({
    apiKey: "AIzaSyDGjR7kqAFRiZ6hVluT9LhshR7_wvqOEug",
    onPlaceSelected: (place) =>
      setSearchField({
        ...searchField,
        address: place.formatted_address,
      }),
  });
  return (
    <div className="lg:w-[300px] h-[50px] flex rounded-full border border-[#AAA] items-center jsutify-center px-4 gap-6">
      <LocationIcon />
      <input
        ref={ref}
        className="text-primary font-semibold w-full border-none outline-none"
        placeholder="City, airport,address or hotel"
      />
    </div>
  );
};
