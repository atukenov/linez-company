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
