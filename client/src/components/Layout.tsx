import React from "react";
import { Outlet } from "react-router-dom";

const Layout = (props: any) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
