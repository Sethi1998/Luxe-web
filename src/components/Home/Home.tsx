import React from "react";
import Layout from "../common/Layout";
import { BannerSection } from "./BannerSection";
import { FindDrive } from "./FindDrive";
import { ReactSlider } from "../common/Slider/Slider";
import { PerfectCar } from "./PerfectCar";
import { CustomerReview } from "./CustomerReview";
import { FAQ } from "./FAQ";
import { FindLuxury } from "./FindLuxury";

const img = "/img/HomeBanner.png";
const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <BannerSection />
        <FindLuxury />
        <PerfectCar />
        <FindDrive />
        <CustomerReview />
        <FAQ />
      </div>
    </Layout>
  );
};

export default Home;
