import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

const list = [
  {
    name: "Messages",
    link: "/inbox/messages",
  },
  {
    name: "Notifications",
    link: "/inbox/notifications",
  },
];
export const Inbox = () => {
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
