import { CalendarIcon } from "@/icons/CalendarIcon";
import { TimeIcon } from "@/icons/TimeIcon";
import React, { useRef } from "react";
import { CitySearchProp } from "./CitySearch";

export const StartTime = ({ setSearchField, searchField }: CitySearchProp) => {
  const startDateRef = useRef<any>(null);
  const startTimeRef = useRef<any>(null);
  return (
    <div className="lg:w-[300px] h-[50px] flex rounded-full border border-[#AAA] items-center justify-center px-4 gap-4 text-primary font-semibold lg:w-[362px]">
      <span
        className="cursor-pointer"
        onClick={() => {
          startDateRef?.current?.showPicker();
        }}
      >
        <CalendarIcon />
      </span>
      <input
        className="text-primary font-semibold w-full border-none outline-none cursor-pointer"
        ref={startDateRef}
        placeholder="Start Date"
        onChange={(e) => console.log(e.target.value, "value")}
        onClick={(e: any) => {
          e.target.type = "date";
          startDateRef?.current?.showPicker();
        }}
      />
      <span>|</span>
      <span
        className="cursor-pointer"
        onClick={() => {
          startTimeRef?.current?.showPicker();
        }}
      >
        <TimeIcon />
      </span>
      <input
        type="time"
        ref={startTimeRef}
        className="text-primary font-semibold w-full border-none outline-none cursor-pointer"
        onClick={(e: any) => {
          e.target.type = "time";
          startTimeRef?.current?.showPicker();
        }}
      />
    </div>
  );
};
