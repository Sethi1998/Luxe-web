import React, { useContext, useState } from "react";
import Image from "next/image";
import { CMSModal } from "@/context";
import { Login } from "@/components/Login";
import { Signup } from "@/components/Signup";
import Link from "next/link";
import { deleteCookie } from "@/services/cookies";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { apiHandler } from "@/services/api";
import { updateUser } from "@/services/api/constants";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { loginPopup, setLoginPopup, userInfo, setUserInfo } =
    useContext(CMSModal);
  const router = useRouter();

  return (
    <header className="fixed bg-white shadow-xl top-0 w-full z-50">
      <div className="max-w-[100vw] px-4 lg:px-[80px] py-[10px]">
        <div className="flex justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <h1 className="text-base font-bold lg:text-xl">LuxeRide</h1>
          </Link>

          <div className="flex gap-4 lg:gap-6 items-center">
            {/* {userInfo && ( */}
              <span className="bg-primary p-[6px] rounded-lg text-white text-xs lg:text-sm">
                <Link href="/trips/booked">Switch to Host</Link>
              </span>
            {/* )} */}
            <div
              className="flex gap-4 cursor-pointer hover:bg-gray-100 p-2 items-center"
              onClick={() => setMenuActive((prev) => !prev)}
            >
              <Image
                src="/hamburger.png"
                width={40}
                height={20}
                alt="Vector"
                className="w-5"
              />
              <Image
                src="/Vector.png"
                width={50}
                height={50}
                alt="Vector"
                className="w-8"
              />
            </div>
          </div>
        </div>
      </div>
      {menuActive && (
        <div className="absolute bg-white shadow-2xl top-[80px] p-4 rounded-lg w-[221px] right-[5%] text-secondary flex flex-col gap-4">
          {/* {userInfo ? ( */}
          <div className="flex flex-col gap-4 justify-center border-b p-2">
            <Link
              href="/favorites"
              className={twMerge(
                "flex gap-2 hover:text-primary items-center",
                router.pathname === "/favorites" && "text-primary"
              )}
            >
              Favorites
              <Image
                src="/img/love.png"
                alt="favorite"
                width={15}
                height={15}
                className="w-[14px] h-[14px]"
              />
            </Link>

            <Link href="/trips/booked" className="hover:text-primary">
              Trip
            </Link>
            <Link href="/inbox/messages" className="hover:text-primary">
              Inbox
            </Link>
          </div>
          <div className="flex flex-col gap-4 justify-center border-b p-2">
            <Link
              href="profile"
              className={twMerge(
                "hover:text-primary",
                router.asPath === "/profile" ? "text-primary" : ""
              )}
            >
              Profile
            </Link>
            <span
              onClick={() => {
                toast.success("User Logout Successfully");
                deleteCookie("token");
                setUserInfo("");
                setMenuActive(false);
              }}
            >
              <Link href="/" className="hover:text-primary">
                {" "}
                Logout
              </Link>
            </span>
          </div>
          {/* ) : (
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
          )} */}
        </div>
      )}
      <Toaster />
      {loginPopup === "login" && <Login />}
      {loginPopup === "signup" && <Signup />}
    </header>
  );
};

export default Header;
