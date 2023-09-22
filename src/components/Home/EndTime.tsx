import { CalendarIcon } from "@/icons/CalendarIcon";
import { TimeIcon } from "@/icons/TimeIcon";
import React, { useRef } from "react";
import { CitySearchProp } from "./CitySearch";

export const EndTime = ({ setSearchField, searchField }: CitySearchProp) => {
    const endDateRef = useRef<any>(null);
    const endTimeRef = useRef<any>(null);
  
  return (
    <div className="lg:w-[300px] h-[50px] flex rounded-full border border-[#AAA] items-center justify-center px-4 gap-4 text-primary font-semibold lg:w-[362px]">
      <span
        className="cursor-pointer"
        onClick={() => {
          endDateRef?.current?.showPicker();
        }}
      >
        <CalendarIcon />
      </span>
      <input
        className="text-primary font-semibold w-full border-none outline-none cursor-pointer"
        ref={endDateRef}
        placeholder="End Date"
        onClick={(e: any) => {
          e.target.type = "date";
          endDateRef?.current?.showPicker();
        }}
      />
      <span>|</span>
      <span
        className="cursor-pointer"
        onClick={() => {
          endTimeRef?.current?.showPicker();
        }}
      >
        <TimeIcon />
      </span>
      <input
        type="time"
        ref={endTimeRef}
        className="text-primary font-semibold w-full border-none outline-none cursor-pointer"
        onClick={(e: any) => {
          e.target.type = "time";
          endTimeRef?.current?.showPicker();
        }}
      />
    </div>
  );
};
