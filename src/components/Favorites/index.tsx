import { useContext } from "react";
import Container from "../common/Container";
import Layout from "../common/Layout";
import { CMSModal } from "@/context";
import Image from "next/image";
import { FavoriteCard } from "./FavoriteCard";

export const Favorites = () => {
  const { userInfo } = useContext(CMSModal);
  console.log(userInfo);

  return (
    <Layout>
      <Container>
        <div className="flex gap-2 items-center">
          <h2 className="text-xl lg:text-3xl font-bold">
            {userInfo?.firstName}'s favorites
          </h2>
          <Image src="/img/Lover.png" width={40} height={30} alt="love" />
        </div>
        <div className="flex flex-col mt-10 lg:grid grid-cols-3 gap-10 items-center">
          <FavoriteCard
            label="Mercedes Benz"
            img="/HomeBanner.jpg"
            rating="5.0"
            price="130"
          />
          <FavoriteCard
            label="Bmw "
            img="/HomeBanner.jpg"
            rating="5.0"
            price="110"
          />
          <FavoriteCard
            label="Mercedes Benz"
            img="/HomeBanner.jpg"
            rating="5.0"
            price="100"
          />{" "}
          <FavoriteCard
            label="Bmw Benz"
            img="/HomeBanner.jpg"
            rating="5.0"
            price="100"
          />
        </div>
      </Container>
    </Layout>
  );
};
