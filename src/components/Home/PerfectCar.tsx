/* eslint-disable react/no-unescaped-entities */
import BgIcon from "@/icons/BgIcon";
import Image from "next/image";
import React from "react";
import Container from "../common/Container";
import { PrimaryButton } from "../common/Button/PrimaryButton";

export const PerfectCar = () => {
  return (
    <div className="relative">
      <Image
        src="/img/PerfectCar.png"
        alt="Perfect"
        width="561"
        height="661"
        className="absolute top-[100px] lg:top-[130px] w-[350px] md:left-[180px] lg:left-0 lg:w-[561px]"
      />
      <Container>
        <div className="flex flex-col gap-6 justify-between w-full lg:flex-row md:items-center">
          <BgIcon className="w-[350px] lg:w-[550px]" />
          <div className="flex flex-col gap-6 lg:w-[40%]">
            <h2 className="font-semibold capitalize text-center lg:text-left lg:text-4xl lg:leading-[72px] ">
              Find the perfect car to take on the great outdoors
            </h2>
            <p className="text-secondary leading-[40px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <PrimaryButton label="Browse Car" />
          </div>
        </div>
      </Container>
    </div>
  );
};
