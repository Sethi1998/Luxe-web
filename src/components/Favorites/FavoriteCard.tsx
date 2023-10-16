import Image from "next/image";
import { favorite } from ".";
import { apiHandler } from "@/services/api";
import { removeFavoriteVehicle } from "@/services/api/constants";
import { useContext } from "react";
import { CMSModal } from "@/context";

interface FavoriteCardProp {
  item: favorite;
  fetch:()=>void
}
export const FavoriteCard = ({ item,fetch }: FavoriteCardProp) => {
  const { setLoading } = useContext(CMSModal);
  const RemoveFavoriteVehicle = async () => {
    setLoading(true);
    const res = await apiHandler(`${removeFavoriteVehicle}`, "POST", {
      vehicle: item.vehicle._id,
    });
    fetch()
    setLoading(false);
  };
  return (
    <div className="rounded-xl shadow-2xl lg:w-[400px] flex flex-col items-center gap-2">
      <div>
        <Image
          src="/HomeBanner.jpg"
          width={400}
          height={300}
          alt="favorite"
          className="rounded-t-xl w-[350px] lg:w-[400px]"
        />
      </div>
      <div className="flex flex-col gap-2 p-2 text-left w-full">
        <h2 className="font-bold">
          {item.make.companyName} {item.model.subCategoryName}
        </h2>
        <span>{5.0} (50 trips)</span>
      </div>
      <div className="flex justify-between w-[90%] border-t p-2 items-center font-semibold">
        <Image src="/img/lover.png" width={20} height={20} alt="love"className="cursor-pointer" onClick={async()=>RemoveFavoriteVehicle()}/>
        <span>{item.vehicle.amount}/day</span>
      </div>
    </div>
  );
};
