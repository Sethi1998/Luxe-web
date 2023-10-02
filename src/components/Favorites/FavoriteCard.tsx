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
    <div className="rounded-xl shadow-2xl lg:w-[400px] flex flex-col items-center gap-2">
      <div>
        <Image
          src={img}
          width={400}
          height={300}
          alt="favorite"
          className="rounded-t-xl w-[350px] lg:w-[400px]"
        />
      </div>
      <div className="flex flex-col gap-2 p-2 text-left w-full">
        <h2 className="font-bold">{label}</h2>
        <span>{rating} (50 trips)</span>
      </div>
      <div className="flex justify-between w-[90%] border-t p-2 items-center font-semibold">
        <Image src="/img/lover.png" width={20} height={20} alt="love" />
        <span>{price}/day</span>
      </div>
    </div>
  );
};
