import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container";
import Image from "next/image";
import { Arrow } from "./Slider";

const imgArr = [
  {
    id: 1,
    name: "/img/home.png",
    text: "  Lorem Ipsum is simply dummy text of the printing andtypesetting industry",
  },
  {
    id: 2,
    name: "/img/PerfectCar.png",
    text: "  Lorem Ipsum is simply dummy text of the printing ",
  },
  {
    id: 3,
    name: "/img/LogoWhite.png",
    text: "  Lorem Ipsum is simply dummy text of the printin",
  },
  {
    id: 4,
    name: "/img/home.png",
    text: "  Lorem Ipsum is simply dummy text of the printin",
  },
  {
    id: 5,
    name: "/img/PerfectCar.png",
    text: "  Lorem Ipsum is simply dummy text of the printin",
  },
  {
    id: 6,
    name: "/img/LogoWhite.png",
    text: "  Lorem Ipsum is simply dummy text of the printin",
  },
];

export const ReviewSlider = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    centerPadding: "30px",
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
      <Slider {...settings}
          nextArrow={<Arrow type="next" />}
          prevArrow={<Arrow type="prev" />}>
        {imgArr.map((item, i) => (
          <div key={i} className="p-8">
            <div className="sliderwarpper flex rounded-lg h-[250px] text-center border text-white ">
              <div className="flex flex-col gap-4 p-4 items-center">
                <div className="flex gap-2">
                  <Image src={item.name} width={20} height={20} alt="profile" className="rounded-full"/>
                  <h2>yash</h2>
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};
