import React, { useState } from "react";
import Container from "../common/Container";
import { CitySearch } from "./CitySearch";
import { StartTime } from "./StartTime";
import { EndTime } from "./EndTime";
import Image from "next/image";
export const BannerSection = () => {
  const [searchField, setSearchField] = useState({
    address: "",
    startTime: "",
    endTime: "",
  });
  console.log(searchField, "seaa");

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
          <div className="flex flex-col bg-white rounded-xl items-centerl gap-6 lg:flex-row lg:h-[120px] lg:rounded-full py-10 px-2 lg:px-10 text-xs lg:text-sm items-center">
            <CitySearch
              setSearchField={setSearchField}
              searchField={searchField}
            />
            <StartTime     setSearchField={setSearchField}
              searchField={searchField}/>
            <EndTime     setSearchField={setSearchField}
              searchField={searchField} />
            <span className="flex bg-primary p-2 rounded-full justify-center cursor-pointer">
              <Image src="/search.png" width={20} height={20} alt="search" />
            </span>{" "}
          </div>
        </div>
      </Container>
    </div>
  );
};
