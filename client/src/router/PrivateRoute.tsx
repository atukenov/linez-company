import { notification } from "antd";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userSelector } from "../features/auth/authSlice";
import { failure } from "../features/event/eventSlice";

interface Props {
  component: React.ReactElement;
  path?: string;
  roles: Array<string>;
}

const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  roles,
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const isAuthenticated = user.isAuth;
  const userHasRequiredRole =
    user && user.roles.some((r) => roles.includes(r)) ? true : false;

  useEffect(() => {
    if (!isAuthenticated) dispatch(failure({ msg: "Login first!" }));
  }, [isAuthenticated, dispatch]);

  console.log(isAuthenticated);

  if (isAuthenticated && userHasRequiredRole) {
    return RouteComponent;
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <Navigate to="/AccessDenied" />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return null;
};

export default PrivateRoute;
