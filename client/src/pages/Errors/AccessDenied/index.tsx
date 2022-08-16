import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const AccessDenied = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-2);
  };

  return (
    <div id="accessdenied">
      <div className="accessdenied">
        <div className="accessdenied-403">
          <h3>Oops! Access to the requested resource is forbidden</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>3</span>
          </h1>
        </div>
        <h2>we are sorry, but you are not allowed to this page.</h2>
        <Button type="primary" onClick={() => handleClick()}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default AccessDenied;
