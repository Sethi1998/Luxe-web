import Image from "next/image";
import React from "react";

export const CarListingCard = () => {
  return (
    <div className="flex border rounded-xl gap-4">
      <Image src="/img/Mercedes3.png" width={300} height={300} alt="listing"  className="rounded-l-xl"/>
      <div className="flex flex-col gap-1 p-2 w-full">
        <h2 className="font-bold">Merceds Benz 2022</h2>
        <span>5.0⭐️ (2 trip)</span>
        <span className="flex gap-2 items-center">
          <Image src="/location.png" width={15} height={15} alt="loctaion" />
          <span className="text-xs font-semibold">Birmingham</span>
        </span>
        <div className="flex mt-6 justify-between w-full">
          <Image src="/img/love.png" width={20} height={20} alt="love" />
          <h2 className="font-semibold">$120/day</h2>
        </div>
      </div>
    </div>
  );
};
