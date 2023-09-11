import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CMSModal = createContext<boolean | string | any>(false);

export const CMSContext = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [loginPopup, setLoginPopup] = useState("");
  const [userInfo, setUserInfo] = useState();
  return (
    <CMSModal.Provider
      value={{
        loading,
        setLoading,
        loginPopup,
        setLoginPopup,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </CMSModal.Provider>
  );
};
