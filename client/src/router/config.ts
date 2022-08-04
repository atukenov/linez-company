const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/login"],
    exact: true,
    component: "Auth",
  },
  {
    path: ["/admin"],
    exact: true,
    component: "Admin",
  },
  {
    path: ["/personal-account"],
    exact: true,
    component: "PersonalAccount",
  },
  {
    path: ["/*"],
    exact: true,
    component: "NotFound",
  },
];

export default routes;
