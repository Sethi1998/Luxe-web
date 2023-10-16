import React, { useContext, useEffect, useMemo, useState } from "react";
import Layout from "../common/Layout";
import Container from "../common/Container";
import { CarListingCard } from "./CarListingCard";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { SearchSection } from "../common/SearchSection";
import { apiHandler } from "@/services/api";
import { getAllVehicles } from "@/services/api/constants";
import { CMSModal } from "@/context";

export interface Vehicle {
  _id: string;
  address: string;
  city: string;
  state: string;
  year: string;
  make: {
    _id: string;
    companyName: string;
  };
  model: {
    _id: string;
    subCategoryName: string;
  };
  amount: string;
  like:boolean
}
export const CarRentalListing = () => {
  const [vehiclesData, setVehiclesData] = useState<Vehicle[]>([]);
  const [count, setCount] = useState(0);
  const { setLoading } = useContext(CMSModal);
  useEffect(() => {
    fetchAllVehicles();
  }, []);
  const fetchAllVehicles = async () => {
    setLoading(true);
    const res = await apiHandler(`${getAllVehicles}`, "POST");
    setVehiclesData(res.data.data);
    setCount(res.data.count);
    setLoading(false);
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDGjR7kqAFRiZ6hVluT9LhshR7_wvqOEug",
  });

  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-6 items-center">
          <SearchSection />
          <div className="">
            {!isLoaded ? (
              <h1>Loading...</h1>
            ) : (
              <GoogleMap
                mapContainerClassName="map-container"
                center={center}
                zoom={10}
              />
            )}
          </div>
          <h2 className="text-xl font-bold">{count} Cars availaible</h2>
          <div className="flex w-full gap-10 h-full">
            <div className="lg:flex lg:flex-[1.5] overflow-y-scroll flex flex-col gap-4">
              {vehiclesData.map((item) => (
                <CarListingCard key={item._id} item={item} fetch={fetchAllVehicles} />
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-[1.2]">
              {!isLoaded ? (
                <h1>Loading...</h1>
              ) : (
                <GoogleMap
                  mapContainerClassName="map-container"
                  center={center}
                  zoom={10}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
