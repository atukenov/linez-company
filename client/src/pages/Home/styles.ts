import styled from "styled-components";

interface Details {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  fz?: string;
  url?: boolean;
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

export const Wrapper = styled.div<Details>`
  position: absolute;

  background: url("./img/web.jpg") no-repeat center top;
  background-size: 100% auto;

  &.open {
    background: url("./img/webopen.jpg") no-repeat center top;
    background-size: 100% auto;
  }

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

export const DoorbellCircle = styled.div<Details>`
  position: absolute;
  width: 4.4%;
  height: 1.4%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) => (p.top !== undefined ? `top: ${p.top};` : "")}
  ${(p) => (p.left !== undefined ? `left: ${p.left};` : "")}
	${(p) => (p.right !== undefined ? `right: ${p.right};` : "")}
	${(p) => (p.bottom !== undefined ? `bottom: ${p.bottom};` : "")}
	${(p) => (p.fz !== undefined ? `font-size: ${p.fz};` : "")}
  outline: none;
  color: #000;
  background: #fff;
  z-index: 0;
  border-radius: 50%;
  animation: ring 900ms infinite;
  cursor: pointer;

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
    border-radius: 50%;
  }

  &:active {
    color: #fff;
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
    border-radius: 50%;
    left: 0;
    top: 0;
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

  @keyframes ring {
    0% {
      transform: rotate(0deg) scale(1);
    }
    25% {
      transform: rotate(25deg) scale(1.2);
    }
    50% {
      transform: rotate(0deg) scale(1.5);
    }
    75% {
      transform: rotate(-25deg) scale(1.2);
    }
    100% {
      transform: rotate(0deg) scale(1);
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

export const View = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

export const WrapperEnvelope = styled.div`
  margin: 0;
  padding: 0;
  /* background-color: #c8e7d8; */
  color: #4e5e72;
  text-align: center;
  font-family: monospace;
  overflow: hidden;
  height: 100%;
  animation: fadeIn 2s forwards ease-in;
  @keyframes fadeIn {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  .wrapper {
    width: 100%;
    height: 100%;
    /* background-color: white; */
  }
  .letter {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 36%;
    max-width: 850px;
    height: 50%;
    margin: auto;
    perspective: 60rem;
    z-index: 9999;
  }
  .side {
    height: 12rem;
    background-color: #fcfcf8;
    outline: 1px solid transparent;
  }
  .side:nth-of-type(1) {
    padding: 2rem 2rem 0;
    border-radius: 1rem 1rem 0 0;
    box-shadow: inset 0 0.75rem 2rem rgba(229, 225, 187, 0.5);
  }
  .side:nth-of-type(2) {
    padding: 1.5rem 2rem;
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.05),
      inset 0 -0.57rem 2rem rgba(229, 225, 187, 0.5);
  }
  .envelope {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
  }
  .envelope.front {
    width: 10rem;
    height: 6rem;
    border-radius: 0 0 1rem 1rem;
    overflow: hidden;
    z-index: 9999;
    opacity: 0;
  }
  .envelope.front::before,
  .envelope.front::after {
    position: absolute;
    display: block;
    width: 12rem;
    height: 6rem;
    background-color: #e9dc9d;
    transform: rotate(30deg);
    transform-origin: 0 0;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    content: "";
  }
  .envelope.front::after {
    right: 0;
    transform: rotate(-30deg);
    transform-origin: 100% 0;
  }
  .envelope.back {
    top: -4rem;
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    z-index: 9998;
    opacity: 0;
    transform: translateY(-6rem);
  }
  .envelope.back::before {
    display: block;
    width: 10rem;
    height: 10rem;
    background-color: #e9dc9d;
    border-radius: 1rem;
    content: "";
    transform: scaleY(0.6) rotate(45deg);
  }
  .result-message {
    opacity: 0;
    transition: all 0.3s 2s;
    transform: translateY(9rem);
    z-index: 4;
  }
  &.sent .letter {
    /*,
               pushLetter 0.5s 1.33s forwards ease-out*/
    animation: scaleLetter 1s forwards ease-in
      /*,
               pushLetter 0.5s 1.33s forwards ease-out*/;
  }
  &.sent .side:nth-of-type(1) {
    transform-origin: 0 100%;
    animation: closeLetter 0.66s forwards ease-in;
  }
  &.sent .side:nth-of-type(1) h1,
  &.sent .side:nth-of-type(1) textarea {
    animation: fadeOutText 0.66s forwards linear;
  }
  &.sent button {
    background-color: rgba(78, 94, 114, 0.2);
  }
  &.sent .envelope {
    animation: fadeInEnvelope 0.5s 1.33s forwards ease-out;
  }
  &.sent .result-message {
    opacity: 1;
    transform: translateY(12rem);
  }
  &.sent small {
    opacity: 0;
  }
  .centered {
    position: absolute;
    left: 0;
    right: 0;
    margin: 1rem auto;
  }

  @keyframes closeLetter {
    50% {
      transform: rotateX(-90deg);
    }
    100% {
      transform: rotateX(-180deg);
    }
  }

  @keyframes fadeOutText {
    49% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeInEnvelope {
    0% {
      opacity: 0;
      transform: translateY(8rem);
    }
    /*90% {opacity: 1; transform: translateY(4rem);}*/
    100% {
      opacity: 1;
      transform: translateY(4.5rem);
    }
  }

  @keyframes scaleLetter {
    40% {
      transform: translateY(-8rem) scale(0.5, 0.5);
    }
    50% {
      transform: translateY(-8rem) scale(0.4, 0.5);
    }
    70% {
      transform: translateY(-8rem) scale(0.5, 0.5);
    }
    97% {
      transform: translateY(-8rem) scale(0.25, 0.5);
    }
    100% {
      transform: translateY(-8rem) scale(0.18, 0.5);
    }
  }

  @keyframes pushLetter {
    0% {
      transform: translateY(-8rem) scale(0.3, 0.5);
    }
    50% {
      transform: translateY(-8rem) scale(0.3, 0.5);
    }
    90% {
      transform: translateY(-8.5rem) scale(0.3, 0.5);
    }
    100% {
      transform: translateY(-8rem) scale(0.3, 0.5);
    }
  }
`;

export const H1 = styled.h1`
  @import url(https://fonts.googleapis.com/css?family=Dancing+Script:400,700);
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-family: "Dancing Script";
`;
export const P = styled.p`
  margin: 0;
  padding: 0;
  &.result-message {
    color: white;
  }
`;
export const Textarea = styled.textarea`
  line-height: 0;
  border: 0;
  outline: none;
  font-family: inherit;
  appearance: none;
  color: #4e5e72;
  background-color: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgb(229, 225, 187)' x='0' y='23' width='10' height='1'/></svg>");
  font-size: 14px;
  width: 100%;
  height: 8rem;
  resize: none;

  &:focus {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgba(78, 94, 114, 0.3)' x='0' y='23' width='10' height='1'/></svg>");
    outline: none;
  }
`;
export const Input = styled.input`
  line-height: 2;
  border: 0;
  outline: none;
  font-family: inherit;
  appearance: none;
  color: #4e5e72;
  background-color: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgb(229, 225, 187)' x='0' y='23' width='10' height='1'/></svg>");
  font-size: 14px;

  padding: 0 1rem 1.75rem;

  &[type="text"]:invalid,
  &[type="email"]:invalid {
    box-shadow: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgba(240, 132, 114, 0.5)' x='0' y='23' width='10' height='1'/></svg>");
  }

  &[type="text"]:focus,
  &[type="email"]:focus {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgba(78, 94, 114, 0.3)' x='0' y='23' width='10' height='1'/></svg>");
    outline: none;
  }
`;
export const Button2 = styled.button`
  line-height: 1rem;
  border: 0;
  outline: none;
  font-family: inherit;
  appearance: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: rgba(78, 94, 114, 0.9);
  color: white;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:focus,
  &:hover {
    outline: none;
    background-color: rgba(78, 94, 114, 1);
  }
`;
