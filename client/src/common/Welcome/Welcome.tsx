import React from "react";
import { useAppSelector } from "../../app/hooks";
import { authSelector } from "../../slices/authSlice";
const Welcome = () => {
  const user = useAppSelector(authSelector).user;
  return (
    <>
      <div className="center">
        <h2
          style={{
            fontSize: 36,
            letterSpacing: "-1px",
            color: "#000",
            textTransform: "uppercase",
            textShadow: "1px 1px 0 #dbdbdb",
            textAlign: "center",
          }}
        >
          Welcome back, {user && user.name}
        </h2>
      </div>
    </>
  );
};

export default Welcome;
