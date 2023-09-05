import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container";
import { RightArrow } from "@/icons/RightArrowIcon";
import { LeftArrow } from "@/icons/LeftArrowIcon";

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
function Arrow(props: any) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <div className="absolute cursor-pointer top-[40%] right-[-20px] w-10 h-10 flex justify-center items-center">
        <RightArrow />
      </div>
    ) : (
      <div className="absolute cursor-pointer top-[40%] left-[-20px] w-10 h-10  flex justify-center items-center">
        <LeftArrow />
      </div>
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}
export const ReactSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    background:"#5660C0",
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
  return (
    <Container>

      <Slider
        {...settings}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
      >
        {imgArr.map((item, i) => (
          <div key={i} className="p-8 h-[300px]">
            <div
              className="sliderwarpper relative flex items-end rounded-[30px] h-[350px] bg-contain bg-no-repeat text-center"
              style={{ backgroundImage: `url(${item.name})` }}
            >
                {/* <h2 className="left-10 top-0 relative">Cargo</h2> */}
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};
