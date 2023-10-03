/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { SecondaryButton } from "../Button/SecondaryButton";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white">
      <Container>
        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="flex-[1.5] flex flex-col gap-4">
            <div className="flex justify-center gap-2 items-center lg:justify-start">
              <Image
                src="/img/LogoWhite.png"
                alt="logo"
                width={35}
                height={35}
              />
              <h1 className="text-lg font-bold lg:text-xl">LuxeRide</h1>
            </div>
            <p className="leading-[40px] text-center lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex-[1.8] flex justify-between flex-col lg:flex-row gap-4 ">
            <div className="flex flex-col gap-2 mt-2">
              <h2 className="font-bold">Office</h2>
              <p>
                #2456 USA <br />
                What is Lorem Ipsum?
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h2 className="font-bold">About us</h2>
              <span>Out taxi's</span>
              <span>Out drivers's</span>
              <span>Contact Us</span>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h2 className="font-bold">Info</h2>
              <Link href="">Faq</Link>
              <Link href="/privacyPolicy">Privacy policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-10 mt-6 text-center">
          <Link
            href="/"
            className="flex bg-white items-center text-black p-2 rounded-xl w-[150px] text-xs justify-center justify-around"
          >
            <Image src="/apple-logo.png" width={20} height={20} alt="social" />
            <span>
              Download on the <span className="font-semibold">App Store</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex bg-white items-center text-black p-2 rounded-xl w-[130px] text-xs justify-around"
          >
            <Image src="/google-play.png" width={20} height={20} alt="social" />
            <span>
              Get it on<br></br> <span className="font-semibold">Google Play</span>
            </span>
          </Link>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
