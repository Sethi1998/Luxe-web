import React, { useContext, useState } from "react";
import Container from "../Container";
import Image from "next/image";
import { PrimaryButton } from "../Button/PrimaryButton";
import { CMSModal } from "@/context";
import { Login } from "@/components/Login";
import { Signup } from "@/components/Signup";
import Link from "next/link";
import { deleteCookie } from "@/services/cookies";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { loginPopup, setLoginPopup, userInfo, setUserInfo } =
    useContext(CMSModal);
  console.log(userInfo, "userInfo");
  return (
    <header className="absolute top-0 w-full z-50">
      <Container>
        <div className="flex justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <h1 className="text-lg font-bold lg:text-xl">LuxeRide</h1>
          </Link>

          <div className="flex gap-6 items-center">
            <span className="hidden lg:flex">
              <PrimaryButton label="Become a host" />
            </span>
            <div
              className="flex gap-4 cursor-pointer hover:bg-gray-100 p-2 items-center"
              onClick={() => setMenuActive((prev) => !prev)}
            >
              <Image
                src="/hamburger.png"
                width={40}
                height={20}
                alt="Vector"
                className="w-8 h-8"
              />
              <Image
                src="/Vector.png"
                width={50}
                height={50}
                alt="Vector"
                className="w-10"
              />
            </div>
          </div>
        </div>
      </Container>
      {menuActive && (
        <div className="absolute bg-white shadow-2xl top-[130px] p-4 rounded-lg w-[221px] right-[5%] text-secondary flex flex-col gap-4">
          {userInfo ? (
            <div className="flex flex-col gap-4">
              <Link href="profile">Profile</Link>
              <Link href="">Trip</Link>
              <span
                onClick={() => {
                  toast.success('User Logout Successfully')
                  deleteCookie("token");
                  setUserInfo("");
                  setMenuActive(false);
                }}
              >
                <Link href="/"> Logout</Link>
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <span
                className="cursor-pointer"
                onClick={() => {
                  setLoginPopup("login");
                  setMenuActive(false);
                }}
              >
                Login
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setLoginPopup("signup");
                  setMenuActive(false);
                }}
              >
                Signup
              </span>
            </div>
          )}
        </div>
      )}
      <Toaster/>
      {loginPopup === "login" && <Login />}
      {loginPopup === "signup" && <Signup />}
    </header>
  );
};

export default Header;
