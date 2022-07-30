const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
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
