import React from "react";
import PrivateRoute from "./PrivateRoute";

import NotFound from "../pages/Errors/NotFound";
import AccessDenied from "../pages/Errors/AccessDenied";

import Home from "../pages/Home";

import Auth from "../pages/Auth/Auth";

import PersonalAccount from "../pages/PersonalAccount";

import Layout from "../components/Layout";
import Welcome from "../components/Welcome/Welcome";

import UserList from "../components/Admin/UserList";
import UserDetail from "../components/Admin/UserDetail";
import AddUser from "../components/Admin/AddUser";

import LogoList from "../components/User/LogoList";
import ProfileView from "../pages/Auth/ProfileView";

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
      {
        path: "profile",
        element: <ProfileView />,
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
