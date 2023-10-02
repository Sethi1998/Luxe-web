/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import Layout from "../common/Layout";
import Container from "../common/Container";
import Image from "next/image";
import { CMSModal } from "@/context";
import moment from "moment";
export const Profile = () => {
  const { userInfo } = useContext(CMSModal);
  const banner = "/img/banner.png";
  return (
    <Layout>
      <Container>
        {/* {userInfo && ( */}
          <>
            <div
              className="border-2 h-[200px] rounded-xl flex flex-col-reverse bg-contain"
              style={{ backgroundImage: `url(${banner})` }}
            >
              <span className="w-[97%] relative top-[30%] left-10 ">
                <img
                  src={
                    userInfo?.profileImg
                      ? `${process.env.NEXT_PUBLIC_API_IMG_URL}/${userInfo?.profileImg}`
                      : "/Vector.png"
                  }
                  alt="profile"
                  className="flex w-[150px] h-[150px] rounded-[100%] border-2 bg-contain z-[999]"
                />
              </span>
            </div>

            <div className="mt-20">
              <h1 className="font-bold text-2xl">
                {userInfo?.firstName} {userInfo?.lastName}
              </h1>
              <span className="text-secondary">
                Joined {moment(userInfo?.createdAt).format("MMMM YYYY")}
              </span>
            </div>
            <div className="w-full bg-[#F5F5F5] mt-4 p-4 grid flex  gap-4 w-full lg:grid-cols-2">
              <span className="flex gap-8  items-center">
                <h2 className="font-bold"> Email:</h2>
                <h2> {userInfo?.email}</h2>
              </span>
              <span className="flex gap-8  items-center">
                <h2 className="font-bold"> Phone:</h2>
                <h2> {userInfo?.phone}</h2>
              </span>
              <span className="flex gap-8 items-center">
                <h2 className="font-bold">Email verified:</h2>
                {userInfo?.isEmailVerified ? (
                  <Image
                    src="/img/verify.png"
                    width={30}
                    height={30}
                    alt="verify"
                  />
                ) : (
                  <h2 className="text-primary text-lg cursor-pointer">
                    Verify Email
                  </h2>
                )}
              </span>
              <span className="flex gap-8 items-center">
                <h2 className="font-bold">Phone verified:</h2>
                {userInfo?.isPhoneVerified ? (
                  <Image
                    src="/img/verify.png"
                    width={30}
                    height={30}
                    alt="verify"
                  />
                ) : (
                  <h2 className="text-primary text-lg cursor-pointer">
                    Verify Phone
                  </h2>
                )}
              </span>
            </div>
          </>
        {/* )} */}
      </Container>
    </Layout>
  );
};
