import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../common/Button/PrimaryButton";

export const History = () => {
  return (
    <div className="flex flex-col gap-6 py-8">
      <h2 className="text-4xl font-semibold">History</h2>
      <div className="flex gap-4 border-t border-b p-4">
        <Image
          src="/img/Mercedes3.png"
          width={100}
          height={100}
          alt="history"
        />
        <div className="flex items-center justify-between w-full">
          <div>
            <h2 className="font-semibold text-gray-600">ABC Trip</h2>
            <h2 className="font-bold">Mercedes Benz C-Class</h2>
            <span className="text-xs">2 Sep-4 Sep</span>
          </div>
          <div>
            <PrimaryButton label="View Details" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 border-t border-b p-4">
        <Image
          src="/img/Mercedes3.png"
          width={100}
          height={100}
          alt="history"
        />
        <div className="flex items-center justify-between w-full">
          <div>
            <h2 className="font-semibold text-gray-600">ABC Trip</h2>
            <h2 className="font-bold">Mercedes Benz C-Class</h2>
            <span className="text-xs">2 Sep-4 Sep</span>
          </div>
          <div>
            <PrimaryButton label="View Details" />
          </div>
        </div>
      </div>
    </div>
  );
};
