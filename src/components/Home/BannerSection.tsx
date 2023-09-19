import React, { useRef } from "react";
import Container from "../common/Container";
import { CalendarIcon } from "@/icons/CalendarIcon";
import { TimeIcon } from "@/icons/TimeIcon";
import { CitySearch } from "./CitySearch";
export const BannerSection = () => {
  const startDateRef = useRef<any>(null);
  const startTimeRef = useRef<any>(null);
  const endDateRef = useRef<any>(null);
  const endTimeRef = useRef<any>(null);

  return (
    <div
      className="w-[101%] flex items-center justify-center h-[500px] bg-no-repeat bg-cover bg-gradient-lightgray-[50%] lg:w-full"
      style={{ backgroundImage: "url(/HomeBanner.jpg)" }}
    >
      <Container>
        <div className="flex flex-col gap-4 lg:w-[1250px] items-center text-center">
          <h1 className="text-2xl font-bold text-white uppercase lg:w-[600px] lg:text-4xl">
            Drive in Luxury at your own schedule
          </h1>
          <h3 className="text-xl text-center font-semibold text-white lg:text-3xl">
            Instantly rent and unlock nearby cars
          </h3>
          <div className="flex flex-col bg-white rounded-xl items-centerl gap-6 lg:flex-row lg:h-[120px] lg:rounded-full py-10 px-2 lg:px-10 text-xs lg:text-sm">
            <CitySearch />
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
          </div>
        </div>
      </Container>
    </div>
  );
};
