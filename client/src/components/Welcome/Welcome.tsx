import React from "react";
import { useAppSelector } from "../../app/hooks";
import { authSelector } from "../../slices/authSlice";

const Welcome = () => {
  const user = useAppSelector(authSelector).user;
  return <div>Welcome back, {user && user.name}</div>;
};

export default Welcome;
