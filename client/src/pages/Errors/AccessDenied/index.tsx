import React from "react";

import "./styles.css";

const AccessDenied = () => {
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
      </div>
    </div>
  );
};

export default AccessDenied;
