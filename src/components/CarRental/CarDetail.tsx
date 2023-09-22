import React from "react";
import Image from "next/image";
import { PrimaryButton } from "../common/Button/PrimaryButton";
import Container from "../common/Container";
export const CarDetail = () => {
  return (
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-[1] justify-center">
          <div className="p-2">
            <Image
              src="/img/Mercedes1.png"
              width={300}
              height={300}
              alt="car"
              className="h-[408px] rounded-l-xl object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <Image
              src="/img/Mercedes2.png"
              width={300}
              height={300}
              alt="car"
              className="h-[200px] rounded-r-xl object-cover"
            />
            <Image
              src="/img/Mercedes3.png"
              width={300}
              height={300}
              alt="car"
              className="h-[200px] rounded-r-xl object-cover"
            />
          </div>
        </div>
        <div className="mt-4 flex-[1.4] flex flex-col lg:flex-row justify-around gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-primary text-xl">Yash Chandel</h2>
            <h1 className="text-xl font-bold">Mercedes-Benz C-Class 2020</h1>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-1 border-2 w-[100px] p-2 rounded-xl items-center">
                <Image
                  src="/img/engine.png"
                  width={30}
                  height={30}
                  alt="engine"
                />
                <span className="font-semibold">1600hp</span>
              </div>
              <div className="flex flex-col gap-1 border-2 w-[100px] p-2 rounded-xl items-center">
                <Image
                  src="/img/gear.png"
                  width={30}
                  height={30}
                  alt="engine"
                />
                <span className="font-semibold">Automatic</span>
              </div>
              <div className="flex flex-col gap-1 border-2 w-[100px] p-2 rounded-xl items-center">
                <Image
                  src="/img/fuel.png"
                  width={30}
                  height={30}
                  alt="engine"
                />
                <span className="font-semibold">Petrol</span>
              </div>
              <div className="flex flex-col gap-1 border-2 w-[100px] p-2 rounded-xl items-center">
                <Image
                  src="/img/car-door.png"
                  width={30}
                  height={30}
                  alt="engine"
                />
                <span className="font-semibold">4 doors</span>
              </div>
              <div className="flex flex-col gap-1 border-2 w-[100px] p-2 rounded-xl items-center">
                <Image
                  src="/img/car-seat.png"
                  width={30}
                  height={30}
                  alt="engine"
                />
                <span className="font-semibold">5 seats</span>
              </div>
            </div>
            <div className=" gap-10 flex items-center justify-between">
              <div>
                <h2>Total Price</h2>
                <h2>
                  <span className="text-primary font-semibold">$2,200</span>/day
                </h2>
              </div>
              <div>
                <PrimaryButton label="Book Now" />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              src="/img/star.png"
              width={30}
              height={30}
              alt="engine"
              className="w-[20px] h-[20px]"
            />
            <span>5.0</span>
            <span>(32 Trips)</span>
          </div>
        </div>
      </div>

  );
};
