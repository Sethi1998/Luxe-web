import { Trips } from "@/components/Trips";
import { Booked } from "@/components/Trips/Booked";
import Container from "@/components/common/Container";
import { Hostlayout } from "@/components/common/Layout/Hostlayout";
import React from "react";

const BookedPage = () => {
  return (
    <Hostlayout>
      <Container>
        <Trips />
        <Booked />
      </Container>
    </Hostlayout>
  );
};

export default BookedPage;
