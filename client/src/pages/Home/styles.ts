import styled from "styled-components";

export const Welcome = styled.h1`
  position: absolute;
  color: white;
  font-size: 40px;
  top: 0;
  right: 20%;
`;

export const Wrapper = styled.div`
  position: absolute;
  background: url("./img/web.jpg") no-repeat center top;
  background-size: 100% auto;

  .background-image {
    max-width: 100%;
    max-height: 100%;
    visibility: hidden;
  }
`;
export const Cont = styled.div`
  width: 100%;
  height: 100%;
`;
export const FirstButton = styled.div`
  position: absolute;
  top: 32.25%;
  left: 9.6%;
`;
export const Button = styled.button`
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #000;
  background: #fff;
  cursor: pointer;
  position: relative;
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
