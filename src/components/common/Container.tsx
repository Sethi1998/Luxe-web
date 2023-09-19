import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[100vw] px-4 lg:px-[80px] py-[30px]">{children}</div>;
};

export default Container;
