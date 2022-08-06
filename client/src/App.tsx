import React, { useEffect, useState } from "react";
import Router from "./router";
import Notification from "./common/Notification";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { statusSelector } from "./features/event/eventSlice";
import { Spin } from "antd";
import { loadUser, userSelector } from "./features/auth/authSlice";
import { Outlet } from "react-router-dom";

const App = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(statusSelector).status;
  const isAuth = useAppSelector(userSelector).isAuth;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loadUser(token));
    }
  }, [dispatch]);

  useEffect(() => {
    if (status === "PENDING") setLoading(true);
    else setLoading(false);
  }, [status]);

  return (
    <>
      <Spin spinning={loading}>
        <Notification />
        <Router />
        <Outlet />
      </Spin>
    </>
  );
};

export default App;
