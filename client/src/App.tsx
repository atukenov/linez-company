import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Router from "./router";
import Alert from "./common/Alert";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Spin } from "antd";
import { Styles } from "./styles";
import { loadUser, authSelector } from "./slices/authSlice";
import { Outlet } from "react-router-dom";

const App = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(authSelector).loading;

  const [time, setTime] = useState("fetching");

  useEffect(() => {
    const socket = io("http://localhost:5050");
  }, []);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Spin spinning={loading}>
        <Styles />
        <Alert />
        <Router />
        <Outlet />
      </Spin>
    </>
  );
};

export default App;
