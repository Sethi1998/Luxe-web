import React from "react";
import Container from "../Container";
import Image from "next/image";
import { PrimaryButton } from "../Button/PrimaryButton";

const Header = () => {
  return (
    <header className="absolute top-0 w-full z-50 ">
      <Container>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <h1 className="text-lg font-bold lg:text-xl">LuxeRide</h1>
          </div>
          <div className="flex gap-6 items-center">
            <PrimaryButton label="Become a host" />
            <div>
              <Image src="/Vector.png" width={42} height={42} alt="Vector" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
