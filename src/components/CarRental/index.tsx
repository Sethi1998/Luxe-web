import React from "react";
import Layout from "../common/Layout";
import Container from "../common/Container";
import { CarRentalSlider } from "../common/Slider/CarRentalSlider";
import Image from "next/image";
import { CarDetail } from "./CarDetail";
import { TripDetail } from "./TripDetail";
import { OwnerRating } from "./OwnerRating";

export const CarRental = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-6">
          <h2 className="font-bold">Details</h2>
          <CarDetail />
          <hr />
          <TripDetail />
          <hr />
          <OwnerRating />
        </div>
      </Container>
    </Layout>
  );
};
