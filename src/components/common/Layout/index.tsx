import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { apiHandler } from "@/services/api";
import { me } from "@/services/api/constants";
import { useRouter } from "next/router";
import { CMSModal } from "@/context";
import { cookies } from "next/dist/client/components/headers";
import { deleteCookie } from "@/services/cookies";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { setUserInfo } = useContext(CMSModal);
  const router = useRouter();
  useEffect(() => {
    userInfo();
  }, [router]);
  const userInfo = async () => {
    const response = await apiHandler(`${me}`, "GET");
    const output = response.data;
    console.log(output, "output");
    if (output.success === false) {
      deleteCookie("token");
      router.push("/");
    }
    if (output.success === true) {
      setUserInfo(output.data);
    }
  };
  return (
    <>
      <Header />
      <div className="mt-[120px] min-h-[calc(100vh-40px)] ">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
