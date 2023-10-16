import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { apiHandler } from "@/services/api";
import { me, updateUser } from "@/services/api/constants";
import { useRouter } from "next/router";
import { CMSModal } from "@/context";
import { deleteCookie } from "@/services/cookies";
import { HostHeader } from "./HostHeader";
import { getRequiredStatus } from "@/routes";
import { Loader } from "../Loader";
import { Toaster } from "react-hot-toast";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { userInfo, setUserInfo, loading } = useContext(CMSModal);
  const router = useRouter();
  useEffect(() => {
    userInfoData();
  }, [router]);

  const userInfoData = async () => {
    const response = await apiHandler(`${me}`, "GET");
    const output = response.data;
    if (output.success === true) {
      setUserInfo(output.data);
    }
  };
  return (
    <div className="w-screen flex flex-col justify-between h-screen">
      <Header />
      <div className="mt-[92px]">{children}</div>
      <Footer />
      {loading && <Loader />}
      <Toaster />
    </div>
  );
};

export default Layout;
