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
  const [typesData, setTypesData] = useState<VehicleType[]>([]);
  useEffect(() => {
    fetchVehicleTypes();
  }, []);
  const fetchVehicleTypes = async () => {
    const res = await apiHandler(`${getVehiclesType}`, "GET");
    setTypesData(res.data.data);
  };
  console.log(typesData, "typessDataa");

  return (
    <Container>
      <div className="w-full">
        <h1 className="font-bold text-4xl text-center">Find Your Luxury Car</h1>
        <div className="grid grid-cols-2 gap-6 w-full lg:flex mt-6 justify-around">
          {typesData.map((item) => (
            <div
              className="flex flex-col gap-2 text-center items-center"
              key={item._id}
            >
              <Link
                href={`/car-rental/united/${item.vehicleTypeName}`}
                className="border-2 rounded-xl p-2 w-[150px] flex justify-center "
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_API_IMG_URL}/${item.vehicleTypeImg}`}
                  width={100}
                  height={100}
                  alt="luxury"
                />
              </Link>
              <h2 className="font-bold text-xl">{item.vehicleTypeName}</h2>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
