import React, { FC, useState } from "react";
import Doorbell from "./Doorbell";

interface Props {
  children: React.ReactNode;
}

const Background: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const handleLoad = (event: any) => {
    setHeight(event.target.offsetHeight);
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="container" style={{ height }}>
      <img
        className={`background ${open && "hide"}`}
        src="./img/background.jpg"
        onLoad={handleLoad}
        alt=""
      />
      <img
        className={`background ${!open && "hide"}`}
        src="./img/background-open.jpg"
        alt=""
      />

      {/* <button onClick={handleOpen}>click</button> */}
      {children}
      <Doorbell onClick={handleOpen} />
    </div>
  );
};

export default Background;
