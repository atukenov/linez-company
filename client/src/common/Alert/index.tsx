import { notification } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { alertSelector, clearAlert } from "../../slices/alertSlice";
import { logout } from "../../slices/authSlice";

const Alert = () => {
  const { alertType, msg } = useAppSelector(alertSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (alertType !== "idle" && msg !== "You are not authorized yet.") {
      notification[alertType]({
        placement: "bottomRight",
        message: msg,
      });
      if (msg === "Your session is expired") {
        dispatch(logout);
        navigate("/login");
      }
      dispatch(clearAlert());
    }
  }, [alertType, msg, dispatch, navigate]);

  return <></>;
};

export default Alert;
