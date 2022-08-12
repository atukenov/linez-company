import React from "react";
import LogoList from "../components/Logo/LogoList";
import AddUser from "../components/Admin/AddUser";
import Auth from "../pages/Auth";
import AccessDenied from "../pages/Errors/AccessDenied";
import NotFound from "../pages/Errors/NotFound";
import Home from "../pages/Home";
import PersonalAccount from "../pages/PersonalAccount";
import PrivateRoute from "./PrivateRoute";
import UserList from "../components/Admin/UserList";

const ADMIN = ["admin"];
const ALL = ["admin", "user"];

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/myaccount",
    element: <PrivateRoute roles={ALL} component={<PersonalAccount />} />,
    children: [
      {
        path: "admin/register",
        element: <PrivateRoute roles={ADMIN} component={<AddUser />} />,
      },
      {
        path: "admin/user",
        element: <PrivateRoute roles={ADMIN} component={<UserList />} />,
      },
      {
        path: "admin/logo",
        element: <PrivateRoute roles={ADMIN} component={<LogoList />} />,
      },
    ],
  },
  {
    path: "/AccessDenied",
    element: <AccessDenied />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
