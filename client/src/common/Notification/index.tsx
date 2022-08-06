import { notification } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { statusSelector } from "../../features/event/eventSlice";

const Notification = () => {
  const state = useAppSelector(statusSelector);
  const navigate = useNavigate();
  useEffect(() => {
    switch (state.status) {
      case "ERROR":
        notification.error({
          placement: "bottomRight",
          message: state.error,
        });
        break;
      case "SUCCESS":
        notification.success({
          placement: "bottomRight",
          message: "Successfully loged in!",
        });
        navigate(state.path as string);
        break;
      default:
        break;
    }
  }, [state, navigate]);
  return <></>;
};

export default Notification;
