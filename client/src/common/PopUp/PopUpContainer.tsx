import React, { FC } from "react";

interface props {
  children: React.ReactNode;
}

const PopUpContainer: FC<props> = ({ children }) => {
  return <div>{children}</div>;
};

export default PopUpContainer;
