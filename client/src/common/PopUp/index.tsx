import React, { FC, useEffect, useState } from "react";
import { CustomPopUp } from "./styles";

interface PopUpProps {
  children: React.ReactNode;
  onClose?: (show: boolean) => void;
  show?: boolean;
  title: string;
}

const PopUp: FC<PopUpProps> = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow((prev: boolean) => !prev);
    //props.onClose(false);
  };

  useEffect(() => {
    setShow(show);
  }, [show]);

  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>Open PopUp</button>

      <CustomPopUp>
        <div
          style={{
            visibility: show ? "visible" : "hidden",
            opacity: show ? 1 : 0,
          }}
          className={"overlay " + (show ? "zoom-in" : "")}
        >
          <div className="popup">
            <h2>{props.title}</h2>
            <hr />
            <span className="close" onClick={closeHandler}>
              &times;
            </span>
            <div className="content">{props.children}</div>
          </div>
        </div>
      </CustomPopUp>
    </>
  );
};

export default PopUp;
