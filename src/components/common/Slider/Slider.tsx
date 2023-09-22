import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container";
import { RightArrow } from "@/icons/RightArrowIcon";
import { LeftArrow } from "@/icons/LeftArrowIcon";
import { useRouter } from "next/router";

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
  slidesToShow: 3,
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
export const ReactSlider = () => {
  const router =useRouter()
  return (
    <Slider
      {...settings}
      nextArrow={<Arrow type="next" />}
      prevArrow={<Arrow type="prev" />}
    >
      {imgArr.map((item, i) => (
        <div key={i} className="p-8">
          <div
            className="sliderwarpper flex items-end rounded-lg bg-contain bg-no-repeat text-center h-[250px]"
            style={{ backgroundImage: `url(${item.name})` }}
            onClick={()=>router.push('/car-rental/uk/mercedes')}
          ></div>
        </div>
      ))}
    </Slider>
  );
};
