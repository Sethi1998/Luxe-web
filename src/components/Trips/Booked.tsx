import React from "react";
import Container from "../common/Container";
import Image from "next/image";

export const Booked = () => {
  return (
    <div className="py-8">
      <h2 className="text-4xl font-semibold">Booked</h2>
      <div className="flex flex-col items-center mt-8">
        <Image src="/img/NoTrip.png" width={500} height={200} alt="No Trip" />
        <h3 className="text-2xl font-semibold text-center">No booked trips</h3>
      </div>
    </div>
  );
};
