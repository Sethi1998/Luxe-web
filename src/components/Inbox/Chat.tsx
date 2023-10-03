import Image from "next/image";
import { Hostlayout } from "../common/Layout/Hostlayout";
import Container from "../common/Container";
import { PrimaryButton } from "../common/Button/PrimaryButton";

export const Chat = () => {
  return (
    <Hostlayout>
      <Container>
        <div className="py-8">
          <div className="flex flex-col justify-between border-b p-2 lg:flex-row">
            <h2 className="text-2xl lg:text-4xl font-semibold">Past Trip</h2>
            <div className="flex gap-2 items-center">
              <span>Mercedes-Benz SLK-Class 2009</span>
              <Image
                src="/img/Mercedes1.png"
                width={30}
                height={30}
                alt="profile"
                className="w-20 h-10 object-cover"
              />
            </div>
          </div>

          <div className="mt-4 p-2 border-b">
            <h3 className="font-bold">Messages</h3>
          </div>
          <div>
            <div className="flex justify-between m-4">
              <div></div>
              <div className="flex flex-col ">
                <span className="bg-gray-200 p-2 rounded">Hello Mr</span>
                <span className="text-sm text-right">10:28</span>
              </div>
            </div>
            <div className="flex justify-between m-4">
              <div className="flex flex-col ">
                <span className="bg-gray-200 p-2 rounded">Hello Abc</span>
                <span className="text-sm text-left">10:35</span>
              </div>
              <div></div>
            </div>
            <div className="flex justify-between m-4">
              <div></div>
              <div className="flex flex-col">
                <span className="bg-gray-200 p-2 rounded max-w-[500px]">
                  {" "}
                  I will be at that location tomorrow Sat Jan 15 to pick up the
                  vehicle. Let me know. Thank you
                </span>
                <span className="text-sm text-right">10:40</span>
              </div>
            </div>
          </div>
          <div className="mt-32 flex justify-center w-full">
            <div className="flex flex-col gap-6 w-full lg:w-[60%]">
              <textarea
                placeholder="Some Text"
                className="w-full border-2 rounded-lg p-2"
              />
              <PrimaryButton label="Submit" />
            </div>
          </div>
        </div>
      </Container>
    </Hostlayout>
  );
};
