import React, { useState } from "react";
import { SvgIcon } from "../../common/SvgIcon";
import "./styles.css";

const Header = () => {
  const [collapse, setCollapse] = useState("hide");

  const handleCollapse = () => {
    setCollapse((prev) => {
      if (prev === "hide") return "show";
      return "hide";
    });
  };

  return (
    <div className="header">
      <div className="logo">
        <SvgIcon src="logo-text.svg" width="101px" height="64px" />
      </div>
      <div className={`navigation-menu ${collapse}`}>
        <div className="languages">
          <div className="language">
            <SvgIcon
              src="united-states.svg"
              aria-label="homepage"
              width="30px"
              height="30px"
            />
          </div>
          <div className="language">
            <SvgIcon
              src="russia.svg"
              aria-label="homepage"
              width="30px"
              height="30px"
            />
          </div>
        </div>
        <div className="sign-in" hidden>
          Sign In
        </div>
      </div>
      <div className={`burger ${collapse}`} onClick={handleCollapse}>
        <div className={`line ${collapse}`} />
        <div className={`line ${collapse}`} />
        <div className={`line ${collapse}`} />
      </div>
    </div>
  );
};

export default Header;
