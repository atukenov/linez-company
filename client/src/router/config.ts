const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/logo/:id"],
    exact: true,
    component: "LogoDetail",
  },
];

export default routes;
