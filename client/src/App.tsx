import React, { useEffect } from "react";
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
