/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import Container from "../common/Container";
import Layout from "../common/Layout";
import { CMSModal } from "@/context";
import Image from "next/image";
import { FavoriteCard } from "./FavoriteCard";
import { apiHandler } from "@/services/api";
import { getFavoriteVehicles } from "@/services/api/constants";

export interface favorite {
  _id: string;
  vehicle: {
    _id: string;
    amount: string;
  };
  make: {
    _id: string;
    companyName: string;
  };
  model: {
    _id: string;
    subCategoryName: string;
  };
}
export const Favorites = () => {
  const [favoritesData, setFavoritesData] = useState<favorite[]>([]);
  const { userInfo, setLoading } = useContext(CMSModal);
  console.log(favoritesData, "favorites");

  useEffect(() => {
    GetFavorite();
  }, []);
  const GetFavorite = async () => {
    setLoading(true);
    const res = await apiHandler(`${getFavoriteVehicles}`);
    setFavoritesData(res.data.data);
    setLoading(false);
  };
  return (
    <Layout>
      <Container>
        <div className="flex gap-2 items-center">
          <h2 className="text-xl lg:text-3xl font-bold">
            {userInfo?.firstName}'s favorites
          </h2>
          <Image src="/img/lover.png" width={20} height={20} alt="love" />
        </div>
        <div className="flex flex-col items-center mt-10 lg:grid grid-cols-3 gap-10 items-center">
          {favoritesData ? (
            favoritesData.map((item) => (
              <FavoriteCard key={item._id} item={item} fetch={GetFavorite} />
            ))
          ) : (
            <h2 className="font-bold text-xl">No Favorite Vehicles Found</h2>
          )}
        </div>
      </Container>
    </Layout>
  );
};
