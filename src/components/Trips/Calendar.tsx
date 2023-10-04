import React, { useRef, useState } from "react";
import { RSelect } from "../common/RSelect";
import { SelectNew } from "../common/SelectNew";
import { CalendarIcon } from "@/icons/CalendarIcon";
import { list } from "postcss";

const Calendar = () => {
  const startDateRef = useRef<any>(null);
  const [inputType, setInputType] = useState("text");
  const sort = [
    {
      label: "Make/model/year (A-Z)",
      value: "Make/model/year (A-Z)",
    },
    {
      label: "Make/model/year (Z-A)",
      value: "Make/model/year (Z-A)",
    },
  ];
  const list=[
    {
      label:"listed",
      value:"listed"
    },    {
      label:"unlisted",
      value:"unlisted"
    }
  ]
  const vehicles=[
    {
      label:"Land Rover Range Rover 2016",
      value:"Land Rover Range Rover 2016"
    },{
      label:"Land Rover Range Rover 2022",
      value:"Land Rover Range Rover 2022"
    }
  ]
  return (
    <div className="py-8">
      <div className="lg:flex gap-6 grid grid-cols-2">
        <SelectNew label="Sort" option={sort} defaultOption="Sort" />
        <SelectNew label="Sort" option={list} defaultOption="Listing Status" />
        <SelectNew label="Sort" option={vehicles} defaultOption="Vehicles" />

        <div className="flex gap-2 text-primary border-2 rounded p-2 items-center font-semibold">
          <span
            className="cursor-pointer"
            onClick={() => {
              startDateRef?.current?.showPicker();
            }}
          >
            <CalendarIcon />
          </span>
          <input
            className="text-primary font-semibold w-full cursor-pointer outline-none"
            placeholder="Filter by date"
            name="startDate"
            type={inputType}
            ref={startDateRef}
            onClick={(e: any) => {
              setInputType("date");
              startDateRef?.current?.showPicker();
            }}
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-20 text-center">
        No vehicles found
      </h2>
    </div>
  );
};

export default Calendar;
