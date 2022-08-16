import { notification } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { alertSelector, clearAlert } from "../../slices/alertSlice";
import { logout } from "../../slices/authSlice";

const Alert = () => {
  const { alertType, msg } = useAppSelector(alertSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (alertType !== "idle") {
      notification[alertType]({
        placement: "bottomRight",
        message: msg,
      });
      if (msg === "Your session is expired") dispatch(logout);
      dispatch(clearAlert());
    }
  }, [alertType, msg, dispatch]);

  return <></>;
};

export default Alert;
