import styled from "styled-components";

interface Details {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  fz?: string;
}

export const Welcome = styled.span<Details>`
  position: absolute;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 15%;
  ${(p) => (p.top !== undefined ? `top: ${p.top};` : "")}
  ${(p) => (p.left !== undefined ? `left: ${p.left};` : "")}
	${(p) => (p.right !== undefined ? `right: ${p.right};` : "")}
	${(p) => (p.bottom !== undefined ? `bottom: ${p.bottom};` : "")}
	${(p) => (p.fz !== undefined ? `font-size: ${p.fz};` : "")}
`;

export const Wrapper = styled.div`
  position: absolute;
  background: url("./img/web.jpg") no-repeat center top;
  background-size: 100% auto;

  .background-image {
    width: 100vw;
    visibility: hidden;
  }
`;
export const Cont = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const BellDoor = styled.div<Details>`
  ${(p) => (p.top !== undefined ? `top: ${p.top};` : "")}
  ${(p) => (p.left !== undefined ? `left: ${p.left};` : "")}
	${(p) => (p.right !== undefined ? `right: ${p.right};` : "")}
	${(p) => (p.bottom !== undefined ? `bottom: ${p.bottom};` : "")}
	${(p) => (p.fz !== undefined ? `font-size: ${p.fz};` : "")}
  width: 1.5vw;
  height: 1.5vw;
  background: linear-gradient(#fabc3c, #facc6b);
  border-radius: 50%;
  position: absolute;
  animation: shake 2s infinite;

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(1px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-2px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(2px, 0, 0);
    }
  }
`;

export const Bzzz = styled.div<Details>`
  span {
    position: absolute;
    font-weight: 900;
    color: white;
    opacity: 1;
    ${(p) => (p.top !== undefined ? `top: ${p.top};` : "")}
    ${(p) => (p.left !== undefined ? `left: ${p.left};` : "")}
		${(p) => (p.right !== undefined ? `right: ${p.right};` : "")}
		${(p) => (p.bottom !== undefined ? `bottom: ${p.bottom};` : "")}
		${(p) => (p.fz !== undefined ? `font-size: ${p.fz};` : "")}
		animation: sleep 5.5s infinite ease-in-out;
    &:nth-child(2n) {
      animation-delay: 500ms;
    }
    &:nth-child(3n) {
      animation-delay: 1000ms;
    }
    &:nth-child(4n) {
      animation-delay: 1500ms;
    }
    &:nth-child(5n) {
      animation-delay: 2000ms;
    }
    &:nth-child(6n) {
      animation-delay: 2500ms;
    }
    &:nth-child(7n) {
      animation-delay: 3000ms;
    }
    &:nth-child(8n) {
      animation-delay: 3500ms;
    }
    &:nth-child(9n) {
      animation-delay: 4000ms;
    }
    &:nth-child(10n) {
      animation-delay: 4500ms;
    }
    &:nth-child(11n) {
      animation-delay: 5000ms;
    }
  }
  @keyframes sleep {
    0% {
      transform: translate(0, 0) scale(0.3);
      opacity: 0;
    }

    100% {
      transform: translate(500%, -70%) scale(1);
      opacity: 1;
    }
  }
`;

export const Button = styled.button<Details>`
  width: 12.5%;
  height: 1%;
  ${(p) => (p.top !== undefined ? `top: ${p.top};` : "")}
  ${(p) => (p.left !== undefined ? `left: ${p.left};` : "")}
	${(p) => (p.right !== undefined ? `right: ${p.right};` : "")}
	${(p) => (p.bottom !== undefined ? `bottom: ${p.bottom};` : "")}
	${(p) => (p.fz !== undefined ? `font-size: ${p.fz};` : "")}
  border: none;
  outline: none;
  color: #000;
  background: #fff;
  cursor: pointer;
  position: absolute;
  z-index: 0;
  border-radius: 10px;

  &:before {
    content: "";
    background: linear-gradient(45deg, #ffffff, #fff700);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
