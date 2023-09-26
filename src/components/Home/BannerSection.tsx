import React, { useState } from "react";
import Container from "../common/Container";
import { SearchSection } from "../common/SearchSection";
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
          <SearchSection />
        </div>
      </Container>
    </div>
  );
};
