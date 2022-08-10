const routes = [
  {
    path: "/",
    component: "Home",
  },
  {
    path: "/login",
    component: "Auth",
  },
  {
    path: "/admin",
    component: "Admin",
    roles: ["admin"],
  },
  {
    path: "/admin2",
    component: "Admin",
    roles: ["at"],
  },
  {
    path: "/personal-account",
    component: "PersonalAccount",
  },
  {
    path: "Error/AccessDenied",
    component: "Errors/AccessDenied",
  },
  {
    path: "*",
    component: "Errors/NotFound",
  },
];

export default routes;
