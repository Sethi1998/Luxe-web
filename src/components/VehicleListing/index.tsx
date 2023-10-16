import React, { useContext, useEffect, useState } from "react";
import Container from "../common/Container";
import Link from "next/link";
import { Hostlayout } from "../common/Layout/Hostlayout";
import { apiHandler } from "@/services/api";
import { getMeVehicle } from "@/services/api/constants";
import { data } from "autoprefixer";
import { CMSModal } from "@/context";
import toast from "react-hot-toast";
import Image from "next/image";

export const VehicleListing = () => {
  const { setLoading } = useContext(CMSModal);
  const [vehcilesData, setVehcilesData] = useState([]);
  console.log(vehcilesData, "asdadads");

  useEffect(() => {
    fetchVehicles();
  }, []);
  const fetchVehicles = async () => {
    setLoading(true);
    const res = await apiHandler(`${getMeVehicle}?publish=true`, "GET");
    if (res.data.success) {
      setVehcilesData(res.data.data);
      setLoading(false);
    } else {
      toast.error(res.data.message);
    }
  };
  return (
    <Hostlayout>
      <Container>
        <div className="py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl lg:text-4xl font-semibold">Listing</h2>
            <Link
              href="/list-your-car"
              className="rounded-xl bg-primary text-white p-2"
            >
              List Your Car
            </Link>
          </div>
          <div className="flex flex-wrap mt-8 justify-around gap-6">
            {vehcilesData.length > 0 ? (
              vehcilesData.map((item: any) => (
                <div key={item._id} className="flex gap-4">
                  <Image
                    width={200}
                    height={200}
                    alt="listing img"
                    src="/img/Mercedes3.png"
                  />
                  <div>
                    <h2 className="font-bold text-lg">
                      {item.model.subCategoryName}
                    </h2>
                    <h2 className="font-semibold">{item.plateNumber}</h2>
                    <span>No trips</span>
                  </div>
                </div>
              ))
            ) : (
              <h3 className="text-xl lg:text-2xl font-semibold">
                No Listing to show
              </h3>
            )}
          </div>
        </div>
      </Container>
    </Hostlayout>
  );
};
