/* eslint-disable react/no-unescaped-entities */
import Container from "../common/Container";
import { ReviewSlider } from "../common/Slider/ReviewSlider";

export const CustomerReview = () => {
  return (
    <Container>
      <h2 className="text-center text-3xl leading-[72px] font-semibold">
        What Our Customers <br />
        Have To Say
      </h2>
      <p className="text-center text-secondary">
        Here's what our customers say with CareHealth
      </p>
      <ReviewSlider />
    </Container>
  );
};
