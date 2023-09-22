import React, { useMemo } from "react";
import Layout from "../common/Layout";
import Container from "../common/Container";
import { CarListingCard } from "./CarListingCard";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { CitySearch } from "../Home/CitySearch";
import { StartTime } from "../Home/StartTime";
import { EndTime } from "../Home/EndTime";


export const CarRentalListing = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDGjR7kqAFRiZ6hVluT9LhshR7_wvqOEug",
  });
  console.log(isLoaded, "isloa");

  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex gap-8 justify-center">
            <CitySearch />
            <StartTime />
            <EndTime />
          </div>
          <h2 className="text-xl font-bold">44 Cars availaible</h2>
          <div className="flex w-full gap-10 h-full">
            <div className="flex-[1.5] overflow-y-scroll flex flex-col gap-4">
              <CarListingCard />
              <CarListingCard />
              <CarListingCard />
              <CarListingCard />
              <CarListingCard />
              <CarListingCard />
            </div>
            <div className="flex-[1.2]">
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
