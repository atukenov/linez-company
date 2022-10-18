import React, { FC, useEffect, useState } from "react";
import { CustomPopUp } from "./styles";

interface PopUpProps {
  children: React.ReactNode;
  isOpen: boolean;
  trigger: () => void;
  title: string;
}

const PopUp: FC<PopUpProps> = (props) => {
  const { trigger, isOpen } = props;

  return (
    <>
      {isOpen && (
        <CustomPopUp>
          <div
            style={{
              visibility: isOpen ? "visible" : "hidden",
              opacity: isOpen ? 1 : 0,
            }}
            className={"overlay " + (isOpen ? "zoom-in" : "")}
          >
            <div className="popup">
              <h2>{props.title}</h2>
              <hr />
              <span className="close" onClick={trigger}>
                &times;
              </span>
              <div className="content">{props.children}</div>
            </div>
          </div>
        </CustomPopUp>
      )}
    </>
  );
};

export default PopUp;
