import Layout from "../common/Layout";
import Container from "../common/Container";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
import Link from "next/link";
const list = [
  {
    name: "Booked",
    link: "/trips/booked",
  },
  {
    name: "History",
    link: "/trips/history",
  },
];
export const Trips = () => {
  const router = useRouter();
  return (
        <div className="flex gap-8 w-full border-b-2">
          {list.map((item) => (
            <Link
              key={item.name}
              className={twMerge(
                "font-semibold text-gray-500 cursor-pointer",
                router.asPath === item.link
                  ? "border-b-4 border-primary text-black"
                  : ""
              )}
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
  );
};
