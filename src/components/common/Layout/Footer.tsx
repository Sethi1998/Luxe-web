import Container from "../Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bottom-0 bg-primary text-white">
      <Container>
        <div className="flex gap-10">
          <div className="flex-[1.5] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/img/LogoWhite.png"
                alt="logo"
                width={35}
                height={35}
              />
              <h1 className="text-lg font-bold lg:text-xl">LuxeRide</h1>
            </div>
            <p className="leading-[40px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="flex-[1.8] flex justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">Office</h2>
              <p>
                #2456 USA <br />
                What is Lorem Ipsum?
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">About us</h2>
              <span>Out taxi's</span>
              <span>Out taxi's</span>
              <span>Out taxi's</span>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">About us</h2>
              <span>Out taxi's</span>
              <span>Out taxi's</span>
              <span>Out taxi's</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
