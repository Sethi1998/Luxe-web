import Image from "next/image";
import Container from "../common/Container";
import Link from "next/link";

const array = [
  {
    name: "Luxury",
    img: "/img/Luxury.png",
  },
  {
    name: "Executive",
    img: "/img/Executive.png",
  },
  {
    name: "Utility",
    img: "/img/Utility.png",
  },
  {
    name: "Boat",
    img: "/img/Boat.png",
  },
];
export const FindLuxury = () => {
  return (
    <Container>
      <h1 className="font-bold text-4xl text-center">Find Your Luxury Car</h1>
      <div className="grid grid-cols-2 gap-6 lg:flex mt-6 justify-around ">
        {array.map((item) => (
          <div className="flex flex-col gap-2 text-center" key={item.name}>
            <Link href='/car-rental/united/luxury/listing' className="border-2 rounded-xl p-2 w-[150px] flex justify-center ">
              <Image src={item.img} width={100} height={100} alt="luxury" />
            </Link>
            <h2 className="font-bold text-xl">{item.name}</h2>
          </div>
        ))}
      </div>
    </Container>
  );
};
