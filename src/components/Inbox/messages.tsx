import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Messages = () => {
  const router =useRouter()
  return (
    <div className="py-8">
      <h2 className="text-2xl lg:text-4xl font-semibold">Messages</h2>
      <Link href='/inbox/121/chat' className="flex flex-col justify-between lg:items-center gap-2 mt-8 border-b border-t p-4 hover:bg-gray-100 lg:flex-row">
        <div className="flex flex-col gap-4 lg:items-center lg:flex-row">
          <Image
            src="/img/Mercedes1.png"
            width={30}
            height={30}
            alt="profile"
            className="w-20 h-20 object-cover rounded-full"
          />
          <div>
            <p> Past trip with Mercedes-Benz SLK-Class 2009</p>
            <h2 className="font-semibold">Ojomo J.</h2>
            <span className="text-sm">Hey, I am home</span>
          </div>
        </div>
        <span>24/09/2023</span>
      </Link>
    </div>
  );
};
