import { DownArrow } from "@/icons/DownArrow";
import Container from "../common/Container";
import { RightArrow } from "@/icons/RightArrowIcon";
import { it } from "node:test";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
const question = [
  {
    id: "1",
    que: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: "2",
    que: "Why is LuxeRide service so friendly?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: "3",
    que: "24/7 custemer services?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];

export const FAQ = () => {
  const [queActive, setQueActive] = useState("");
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-3xl font-semibold">
          Frequently Asked Questions
          <br />
          (FAQ)
        </h2>
        <p className="text-center text-secondary">
          Our browser faq below, if you can't find the answer in Gready{" "}
        </p>
        {question.map((item) => (
          <div
            className={twMerge(
              "flex flex-col gap-6 border rounded-lg p-4",
              item.id === queActive && "bg-primary text-white"
            )}
            key={item.id}
          >
            <div className="flex  text-left justify-between items-center">
              <h4>{item.que}</h4>

              {queActive === item.id ? (
                <span onClick={() => setQueActive("")}>
                  <DownArrow />
                </span>
              ) : (
                <span onClick={() => setQueActive(item.id)}>
                  <RightArrow />
                </span>
              )}
            </div>
            {queActive === item.id && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </Container>
  );
};
