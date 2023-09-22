import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import { PrimaryButton } from "../Button/PrimaryButton";
import { apiHandler } from "@/services/api";
import { updateUser } from "@/services/api/constants";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

const headerLinks = [
  {
    name: "Trips",
    url: "/trips/booked",
  },
  {
    name: "Inbox",
    url: "/inbox/messages",
  },
  {
    name: "Vehicles",
    url: "/vehicles/listing",
  },
];
export const HostHeader = () => {
  const router =useRouter()
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
                className={twMerge("flex items-center gap-2",router.pathname===item.url?'text-primary':'')}
                key={item.name}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <div
            className="flex gap-4 cursor-pointer hover:bg-gray-100 p-2 items-center"
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
    </header>
  );
};
