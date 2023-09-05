import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import { LocationIcon } from "@/icons/LocationIcon";
import { CalendarIcon } from "@/icons/CalendarIcon";
import { TimeIcon } from "@/icons/TimeIcon";

export const BannerSection = () => {
  return (
    <div
      className="w-screen flex items-center justify-center h-[670px] bg-no-repeat bg-cover bg-gradient-lightgray-[50%]"
      style={{ backgroundImage: "url(/HomeBanner.jpg)" }}
    >
      <Container>
        <div className="flex flex-col gap-4 lg:w-[1250px] items-center text-center">
          <h1 className="text-2xl font-bold text-white uppercase lg:w-[600px] lg:text-4xl">
            Drive in Luxury at your own schedule
          </h1>
          <h3 className="text-xl text-center text-white lg:text-3xl">
            Instantly rent and unlock nearby cars
          </h3>
          <div className="flex flex-col bg-white rounded-xl items-center text-left gap-6 lg:flex-row lg:h-[120px] lg:rounded-full py-10 px-4 lg:px-10">
            <div className=" w-[300px] h-[65px] flex rounded-full border border-[#AAA] items-center text-left px-10 gap-6 lg:w-[362px] ">
              <LocationIcon />
              <span className="text-primary font-semibold">
                City, airport, address or hotel
              </span>
            </div>
            <div className="w-[300px] h-[65px] flex rounded-full border border-[#AAA] items-center text-left px-10 gap-4 text-primary font-semibold lg:w-[362px]">
              <CalendarIcon />
              <span>Start Date</span>
              <span>|</span>
              <TimeIcon />
              <span>Time</span>
            </div>
            <div className="w-[300px] h-[65px] flex rounded-full border border-[#AAA] items-center text-left px-10 gap-4 text-primary font-semibold lg:w-[362px]">
              <CalendarIcon />
              <span>End Date</span>
              <span>|</span>
              <TimeIcon />
              <span>Time</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
