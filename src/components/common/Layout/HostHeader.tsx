import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import { PrimaryButton } from "../Button/PrimaryButton";
import { apiHandler } from "@/services/api";
import { updateUser } from "@/services/api/constants";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { deleteCookie } from "@/services/cookies";
import toast from "react-hot-toast";
import { CMSModal } from "@/context";

const headerLinks = [
  {
    name: "Trips",
    url: "/trips/booked",
    img: "/img/road.png",
  },

  {
    name: "Inbox",
    url: "/inbox/messages",
    img: "/img/chat-bubble.png",
  },
  {
    name: "Vehicles",
    url: "/vehicles/listing",
    img: "/car.png",
  },
];
export const HostHeader = () => {
  const router = useRouter();
  const [menuActive, setMenuActive] = useState(false);
  const { loginPopup, setLoginPopup, userInfo, setUserInfo } =
    useContext(CMSModal);

  return (
    <header className="fixed bg-white shadow-xl top-0 w-full z-50">
      <div className="max-w-[100vw] px-4 lg:px-[80px] py-[10px]">
        <div className="flex justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <h1 className="text-base font-bold lg:text-xl">LuxeRide</h1>
          </Link>
          <div className="hidden lg:flex gap-10">
            {headerLinks.map((item) => (
              <Link
                href={item.url}
                className={twMerge(
                  "flex items-center gap-2",
                  router.pathname.includes(item.name.toLowerCase())
                    ? "text-primary"
                    : ""
                )}
                key={item.name}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <div
            className="flex gap-4 cursor-pointer p-2 items-center"
            // onClick={() => setMenuActive((prev) => !prev)}
          >
            <span
              className="bg-primary p-[6px] rounded-lg text-white text-xs lg:text-sm"
              onClick={async () => {
                await apiHandler(`${updateUser}`, "POST", {
                  role: "user",
                });
              }}
            >
              <Link href="/">Switch to Guest</Link>
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
          {menuActive && (
            <div className="absolute bg-white shadow-2xl top-[80px] p-4 rounded-lg w-[221px] right-[5%] text-secondary flex flex-col gap-4">
              {userInfo ? (
                <div className="flex flex-col gap-4 justify-center border-b p-2">
                  <Link
                    href="/profile"
                    className={twMerge(
                      "flex gap-2 hover:text-primary items-center",
                      router.asPath === "/profile" ? "text-primary" : ""
                    )}
                  >
                    <Image
                      src="/img/user.png"
                      alt="favorite"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px]"
                    />
                    Profile
                  </Link>{" "}
                  <div className="flex flex-col gap-4 lg:hidden">
                    {headerLinks.map((item) => (
                      <Link
                        href={item.url}
                        className={twMerge(
                          "flex items-center gap-2",
                          router.pathname.includes(item.name.toLowerCase())
                            ? "text-primary"
                            : ""
                        )}
                        key={item.name}
                      >
                        <Image
                          src={item.img}
                          alt="favorite"
                          width={20}
                          height={20}
                          className="w-[20px] h-[20px]"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/earnings"
                    className={twMerge(
                      "flex gap-2 hover:text-primary items-centery",
                      router.asPath === "/profile" ? "text-primary" : ""
                    )}
                  >
                    <Image
                      src="/img/transaction.png"
                      alt="favorite"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px]"
                    />
                    Transcations
                  </Link>
                  <Link
                    href="/contact-us"
                    className={twMerge(
                      "flex gap-2 hover:text-primary items-centery",
                      router.asPath === "/profile" ? "text-primary" : ""
                    )}
                  >
                    <Image
                      src="/img/support.png"
                      alt="favorite"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px]"
                    />
                    Contact Us
                  </Link>
                  <Link
                    href="/privacyPolicy"
                    className={twMerge(
                      "flex gap-2 hover:text-primary items-centery",
                      router.asPath === "/profile" ? "text-primary" : ""
                    )}
                  >
                    <Image
                      src="/img/legal-document.png"
                      alt="favorite"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px]"
                    />
                    Privacy Policy
                  </Link>
                  <Link
                    href="/"
                    className={twMerge(
                      "flex gap-2 hover:text-primary items-centery",
                      router.asPath === "/profile" ? "text-primary" : ""
                    )}
                  >
                    <Image
                      src="/img/swap.png"
                      alt="favorite"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px]"
                    />
                    Switch to guest
                  </Link>
                  <span
                    onClick={() => {
                      toast.success("User Logout Successfully");
                      deleteCookie("token");
                      setUserInfo("");
                      setMenuActive(false);
                    }}
                  >
                    <Link
                      href="/"
                      className="flex gap-2 hover:text-primary items-centery"
                    >
                      <Image
                        src="/img/power-off.png"
                        alt="favorite"
                        width={20}
                        height={20}
                        className="w-[20px] h-[20px]"
                      />
                      Logout
                    </Link>
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
        </div>
      </div>
    </header>
  );
};
