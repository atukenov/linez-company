import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./config";
import { Styles } from "../styles/styles";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Routes>
        {routes.map((routeItem) => {
          const Component = lazy(
            () => import(`../pages/${routeItem.component}`)
          );
          let RouteComponent = <Component />;
          if (typeof routeItem.roles !== "undefined") {
            RouteComponent = (
              <PrivateRoute roles={routeItem.roles} component={<Component />} />
            );
          }

          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              element={RouteComponent}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default Router;
