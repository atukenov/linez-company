import { notification } from "antd";
import React, { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { alertSelector } from "../../slices/alertSlice";

const Alert = () => {
  const { alertType, msg } = useAppSelector(alertSelector);
  useEffect(() => {
    if (alertType !== "idle")
      notification[alertType]({
        placement: "bottomRight",
        message: msg,
      });
  }, [alertType, msg]);
  return <></>;
};

export default Alert;
