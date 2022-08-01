const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/login", "/register"],
    exact: true,
    component: "Auth",
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
