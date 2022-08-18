import { Breadcrumb } from "antd";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const breadcrumbNameMap: Record<string, string> = {
  "/myaccount": "Home",
  "/myaccount/logo": "My Logos",
  "/myaccount/profile": "Profile",
  "/myaccount/logo/details": "Logo Status",
  "/myaccount/logo/details/*": "Logo Details",
  "/myaccount/2": "Application2",
  "/myaccount/3": "Application2",
  "/myaccount/4": "Application2",
  "/myaccount/5": "Application2",
  //---------------------------------------
  "/myaccount/admin": "Admin",
  "/myaccount/admin/user": "User List",
  "/myaccount/admin/user/*": "User Logo List",
  "/myaccount/admin/*/logo": "Logo Details",
  "/myaccount/43": "Application2",
  "/myaccount/54": "Application2",
};

const Breadcrump = () => {
  const location = useLocation();
  const params = useParams();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    let url = "";
    const link = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    if (params.id && _ === params.id) {
      url = `/${pathSnippets.slice(0, index).join("/")}/*`;
    } else {
      url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    }
    return (
      <Breadcrumb.Item key={url}>
        <Link to={link}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = extraBreadcrumbItems;
  return (
    <Breadcrumb itemRender={(route, params, routes, paths) => <>balbla</>}>
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default Breadcrump;
