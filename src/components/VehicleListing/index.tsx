import React from "react";
import Layout from "../common/Layout";
import Container from "../common/Container";
import { PrimaryButton } from "../common/Button/PrimaryButton";
import Link from "next/link";
import { Hostlayout } from "../common/Layout/Hostlayout";

export const VehicleListing = () => {
  return (
    <Hostlayout>
      <Container>
        <div className="py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl lg:text-4xl font-semibold">Listing</h2>
            <Link href="/list-your-car" className="rounded-xl bg-primary text-white p-2">
              List Your Car
            </Link>
          </div>
          <div className="flex flex-col items-center mt-8">
            <h3 className="text-xl lg:text-2xl font-semibold text-center">
              No Listing to show
            </h3>
          </div>
        </div>
      </Container>
    </Hostlayout>
  );
};
