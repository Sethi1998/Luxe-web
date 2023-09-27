/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container";
import { RightArrow } from "@/icons/RightArrowIcon";
import { LeftArrow } from "@/icons/LeftArrowIcon";
import { useRouter } from "next/router";
import Image from "next/image";
import { CompaniesProp } from "@/components/Home/FindDrive";

interface SliderProp {
  arrayData: CompaniesProp[];
}
const imgArr = [
  {
    id: 1,
    name: "/Car1.png",
  },
  {
    id: 2,
    name: "/Car2.png",
  },
  { id: 3, name: "/Car1.png" },
  {
    id: 4,
    name: "/Car2.png",
  },
  { id: 5, name: "/Car1.png" },
];
export function Arrow(props: any) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <div className="absolute cursor-pointer top-[42%] lg:top-[55%] right-[-20px] w-10 h-10 flex justify-center items-center">
        <RightArrow />
      </div>
    ) : (
      <div className="absolute cursor-pointer top-[42%] lg:top-[55%] left-[-20px] w-10 h-10  flex justify-center items-center">
        <LeftArrow />
      </div>
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}
export const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  background: "#5660C0",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
export const ReactSlider = ({ arrayData }: SliderProp) => {
  const router = useRouter();
  return (
    <Slider {...settings}>
      {arrayData.map((item) => (
        <div key={item._id} className="p-8">
          <div className="sliderwarpper flex flex-col items-center justify-center border rounded-xl bg-contain bg-no-repeat gap-2 w-[300px] h-[150px] shadow-xl">
            <img
              src={`${process.env.NEXT_PUBLIC_API_IMG_URL}/${item.companyImg}`}
              alt="slider"
              onClick={() => router.push(`/car-rental/uk/ferrari`)}
              className="w-[100px] object-cover"
            />
            <h2 className="font-semibold">{item.companyName}</h2>
          </div>
        </div>
      ))}
    </Slider>
  );
};
