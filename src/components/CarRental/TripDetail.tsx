import React from "react";
import Container from "../common/Container";

export const TripDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-between">
      <div className="flex flex-col gap-6 w-full border-b lg:border-r lg:border-b-0 p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 text-left">
            <h2 className="font-semibold">Trip Date</h2>
            <span className="text-primary">Thus 10Oct 2023</span>
            <span className="text-primary">Mon 14Oct 2023</span>
          </div>

          <span className="cursor-pointer text-primary font-semibold">
            Change
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 text-left">
            <h2 className="font-semibold">Trip Discount</h2>
            <span className="text-primary">Thus 10Oct 2023</span>
            <span className="text-primary">Mon 14Oct 2023</span>
          </div>
          <span className="cursor-pointer text-primary font-semibold">
            $800
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full px-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Cancellation Policy</h2>
          <span className="text-primary">Free Cancelation</span>
          <span className="text-primary">Free refund before 10oct 10:00</span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Pickup and Drop Location</h2>
          <span className="text-primary">Lagos,Nigeria</span>
        </div>
      </div>
    </div>
  );
};
