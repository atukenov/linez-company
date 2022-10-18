import React, { FC, useEffect, useRef } from "react";

const OverlayTrigger = ({ children, handleClose, isOpen }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target) &&
        isOpen &&
        e.which === 1
      ) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, handleClose, isOpen]);

  return (
    <div ref={wrapperRef} style={{ height: "inherit" }}>
      {children}
    </div>
  );
};

export default OverlayTrigger;
