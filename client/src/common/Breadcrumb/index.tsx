import { Breadcrumb } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const breadcrumbNameMap: Record<string, string> = {
  "/myaccount": "Home",
  "/myaccount/logo": "My Logos",
  "/myaccount/profile": "Profile",
  "/myaccount/1": "Application2",
  "/myaccount/2": "Application2",
  "/myaccount/3": "Application2",
  "/myaccount/4": "Application2",
  "/myaccount/5": "Application2",
  //---------------------------------------
  "/myaccount/admin": "Admin",
  "/myaccount/admin/user": "User List",
  "/myaccount/21": "Application2",
  "/myaccount/32": "Application2",
  "/myaccount/43": "Application2",
  "/myaccount/54": "Application2",
};

const Breadcrump = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = extraBreadcrumbItems;
  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
};

export default Breadcrump;
