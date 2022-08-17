import React from "react";
import AddUser from "../components/Admin/AddUser";
import Auth from "../pages/Auth";
import AccessDenied from "../pages/Errors/AccessDenied";
import NotFound from "../pages/Errors/NotFound";
import Home from "../pages/Home";
import PersonalAccount from "../pages/PersonalAccount";
import PrivateRoute from "./PrivateRoute";
import UserList from "../components/Admin/UserList";
import Welcome from "../components/Welcome/Welcome";
import UserDetail from "../components/Admin/UserDetail";
import Layout from "../components/Layout";
import LogoList from "../components/Logo/LogoList";

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
      // Welcome page
      {
        index: true,
        element: <Welcome />,
      },
      // Admin page
      {
        path: "admin",
        element: <PrivateRoute roles={ADMIN} component={<Layout />} />,
        children: [
          {
            path: "register",
            element: <AddUser />,
          },
          {
            path: "user",
            element: <UserList />,
          },
          {
            path: "user/:id",
            element: <UserDetail />,
          },
        ],
      },
      // User page
      {
        path: "logo",
        element: <LogoList />,
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
