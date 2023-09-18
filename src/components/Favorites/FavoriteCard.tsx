import Image from "next/image";

interface FavoriteCardProp {
  label: string;
  img: string;
  rating: string;
  price: string;
}
export const FavoriteCard = ({
  label,
  img,
  rating,
  price,
}: FavoriteCardProp) => {
  return (
    <div className="rounded-xl shadow-2xl w-[300px] flex flex-col items-center gap-2">
      <div>
        <Image
          src={img}
          width={300}
          height={300}
          alt="favorite"
          className="w-full rounded-t-xl"
        />
      </div>
      <div className="flex flex-col gap-2 p-2 text-left w-full">
        <h2 className="font-bold">{label}</h2>
        <span>{rating} (50 trips)</span>
      </div>
      <div className="flex justify-between w-[90%] border-t p-2 items-center font-semibold">
        <Image src="/img/Lover.png" width={30} height={30} alt="love" />
        <span>{price}/day</span>
      </div>
    </div>
  );
};
