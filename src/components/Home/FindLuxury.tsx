import Image from "next/image";
import Container from "../common/Container";
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiHandler } from "@/services/api";
import { getVehiclesType } from "@/services/api/constants";

type VehicleType = {
  _id: string;
  vehicleTypeName: string;
  vehicleTypeImg: string;
};
const array = [
  {
    name: "Luxury",
    img: "/img/Luxury.jpeg",
  },
  {
    name: "Executive",
    img: "/img/Executive.jpeg",
  },
  {
    name: "Utility",
    img: "/img/Utility.jpeg",
  },
  {
    name: "Bizjet",
    img: "/img/Bizjet.jpeg",
  },
];
export const FindLuxury = () => {
  const [typesData, setTypesData] = useState<VehicleType[]>([]);
  useEffect(() => {
    fetchVehicleTypes();
  }, []);
  const fetchVehicleTypes = async () => {
    const res = await apiHandler(`${getVehiclesType}`, "GET");
    setTypesData(res.data.data);
  };

  return (
    <Container>
      <div className="w-full">
        <h1 className="font-bold text-4xl text-center">Find Your Luxury Car</h1>
        <div className="grid grid-cols-2 gap-6 w-full lg:flex mt-6 justify-around">
          {array.map((item) => (
            <div
              className="flex flex-col gap-2 text-center items-center"
              key={item.name}
            >
              <Link
                href={`/car-rental/united/${item.name}`}
                className="border-2 rounded-xl p-2 w-[150px] flex justify-center "
              >
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  alt="luxury"
                  className="h-[80px]"
                />
              </Link>
              <h2 className="font-bold text-xl">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
