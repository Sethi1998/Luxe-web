import { CMSModal } from "@/context";
import { apiHandler } from "@/services/api";
import {
  addFavoriteVehicle,
  removeFavoriteVehicle,
} from "@/services/api/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Vehicle } from ".";

interface CarListingCardProp {
  item: Vehicle;
  fetch: () => void;
}
export const CarListingCard = ({ item, fetch }: CarListingCardProp) => {
  const { setLoading } = useContext(CMSModal);
  const router = useRouter();
  const type = router.query.type as string;
  const AddFavoriteVehicle = async () => {
    setLoading(true);
    const res = await apiHandler(`${addFavoriteVehicle}`, "POST", {
      vehicle: item._id,
    });
    fetch();
    setLoading(false);
  };
  const RemoveFavoriteVehicle = async () => {
    setLoading(true);
    const res = await apiHandler(`${removeFavoriteVehicle}`, "POST", {
      vehicle: item._id,
    });
    fetch();
    setLoading(false);
  };
  return (
    <div className="flex border rounded-xl gap-4">
      <Image
        src="/img/Mercedes3.png"
        width={300}
        height={300}
        alt="listing"
        className="w-[200px] rounded-l-xl lg:[w-300px] cursor-pointer"
        onClick={() => router.push(`/car-rental/united/${type}/mercedes`)}
      />
      <div className="flex flex-col gap-1 p-2 w-full text-sm lg:text-lg">
        <h2
          className="font-bold cursor-pointer"
          onClick={() => router.push(`/car-rental/united/${type}/mercedes`)}
        >{`${item.make.companyName} ${item?.model?.subCategoryName} ${item.year}`}</h2>
        <span>5.0⭐️ (2 trip)</span>
        <span className="flex gap-2 items-center">
          <Image src="/location.png" width={15} height={15} alt="loctaion" />
          <span className="text-xs font-semibold">{`${item.address}  ${item.city}`}</span>
        </span>
        <div className="flex mt-6 justify-between w-full">
          <Image
            src={item.like ? "/img/lover.png" : "/img/love.png"}
            width={20}
            height={20}
            alt="love"
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={async () =>
              item.like
                ? await RemoveFavoriteVehicle()
                : await AddFavoriteVehicle()
            }
          />
          <h2 className="font-semibold">${item.amount}/day</h2>
        </div>
      </div>
    </div>
  );
};
