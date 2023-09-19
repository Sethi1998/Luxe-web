import React from "react";
import Image from "next/image";
import { Arrow } from "./Slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imgArr = [
  {
    id: 1,
    name: "/img/Mercedes3.png",
  },
  {
    id: 1,
    name: "/img/Mercedes2.png",
  },
];

export const CarRentalSlider = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    speed: 500,
    centerPadding: "30px",
  };
  return (
    <Slider
      {...settings}
      nextArrow={<Arrow type="next" />}
      prevArrow={<Arrow type="prev" />}
    >
      {imgArr.map((item, i) => (
        <div key={i} className="p-8">
          <Image src={item.name} width={500} height={300} alt="profile" />
        </div>
      ))}
    </Slider>
  );
};
