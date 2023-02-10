import React, { FC } from "react";
import styled from "styled-components";
import { SvgIcon } from "../../common/SvgIcon";

interface Props {
  onClick: () => void;
}

const Styles = styled.div`
  /* position: absolute; */
  width: 10%;
  border-top-color: transparent;
  animation: ring 1s linear infinite;

  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(-45deg);
    }
    75% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Doorbell: FC<Props> = ({ onClick }) => {
  return (
    <div className="centered">
      <Styles onClick={onClick}>
        <SvgIcon src="doorbell.svg" height="100%" width="100%" />
      </Styles>
    </div>
  );
};

export default Doorbell;
