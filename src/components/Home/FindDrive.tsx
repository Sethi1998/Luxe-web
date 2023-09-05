/* eslint-disable react/no-unescaped-entities */
import Container from "../common/Container";
import { ReactSlider } from "../common/Slider/Slider";

export const FindDrive = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl capitalize font-semibold lg:text-5xl">
          Find your drive
        </h1>
        <p className="text-secondary lg:w-[70%] lg:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <ReactSlider />
      </div>
    </Container>
  );
};
