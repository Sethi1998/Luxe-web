import React, { useContext, useEffect } from "react";
import { HostHeader } from "./HostHeader";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { getRequiredStatus } from "@/routes";
import { apiHandler } from "@/services/api";
import { me } from "@/services/api/constants";
import { CMSModal } from "@/context";
interface LayoutProps {
  children: React.ReactNode;
}
export const Hostlayout = ({ children }: LayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    userInfoData();
  }, []);
  const userInfoData = async () => {
    const response = await apiHandler(`${me}`, "GET");
    const output = response.data;
    // if (output.success === false) {
    //   router.push("/");
    // }
  };
  return (
    <div className="flex flex-col justify-between h-screen">
      <HostHeader />
      <div className="mt-[92px]">{children}</div>
      <Footer />
    </div>
  );
};
