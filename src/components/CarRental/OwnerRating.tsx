import Image from "next/image";
import Container from "../common/Container";

export const OwnerRating = () => {
  const count = [1, 2, 3, 4, 5];
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h2 className="capitalize font-semibold">Rating and reviews</h2>
        <div>
          <h2 className="text-lg font-semibold">5.0 ⭐️</h2>
          <span>(25 ratings)</span>
        </div>
        <h2 className="text-primary font-semibold">Reviews</h2>
        <div className="flex gap-4">
          <Image
            src="/HomeBanner.jpg"
            width={30}
            height={30}
            alt="review"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <div className="flex flex-col gap-2">
            <span className="flex">
              {count.map((item) => (
                <Image
                  src="/img/star.png"
                  width={30}
                  height={30}
                  alt="engine"
                  className="w-[20px] h-[20px]"
                  key={item}
                />
              ))}
            </span>
            <h2>
              Abc <span className="text-primary">20Aug 2023</span>
            </h2>
            <p>
              Vehicle kept in immaculate condition. Host was very responsive and
              helpful. Quick and efficient pick up and drop off. Great car,
              great service. Thanks
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src="/HomeBanner.jpg"
            width={30}
            height={30}
            alt="review"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <div className="flex flex-col gap-2">
            <span className="flex">
              {count.map((item) => (
                <Image
                  src="/img/star.png"
                  width={30}
                  height={30}
                  alt="engine"
                  className="w-[20px] h-[20px]"
                  key={item}
                />
              ))}
            </span>
            <h2>
              Xyz <span className="text-primary">20Aug 2023</span>
            </h2>
            <p>
              Vehicle kept in immaculate condition. Host was very responsive and
              helpful. Quick and efficient pick up and drop off. Great car,
              great service. Thanks
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
