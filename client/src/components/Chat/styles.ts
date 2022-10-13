import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
`;
export const Header = styled.div`
  height: 50px;
  width: 70%;
  min-width: 320px;
  padding: 10px;
  color: white;
  background-color: darkblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Body = styled.div`
  width: 70%;
  min-height: 200px;
  max-height: 400px;
  min-width: 320px;
  background-color: lightblue;
  overflow: auto;
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 5px;
`;
export const Message = styled.span`
  color: white;
  font-weight: 500;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 10px;
  position: relative;

  &.sender {
    align-self: flex-end;
    background-color: gray;
    margin-right: 15px;
  }

  &.sender::after {
    content: "";
    display: block;
    position: absolute;
    right: -10px;
    top: 0;
    width: 0;
    border-width: 10px 10px 0;
    border-style: solid;
    border-color: gray transparent;
  }

  &.receiver {
    align-self: flex-start;
    background-color: black;
    margin-left: 15px;
  }

  &.receiver::after {
    content: "";
    display: block;
    position: absolute;
    left: -10px;
    top: 0;
    width: 0;
    border-width: 10px 10px 0;
    border-style: solid;
    border-color: #000 transparent;
  }
`;
export const Time = styled.span`
  align-self: center;
  border-radius: 25px;
  padding: 3px 25px;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  min-width: 320px;
`;
export const Input = styled.input`
  flex: 6;
  width: 70%;
  padding: 5px;
  padding-left: 10px;
  background: white;
  height: 30px;
  border: 1px solid darkblue;
  border-top: none;
  border-radius: 0;
`;
export const Send = styled.button`
  flex: 1;
  height: 30px;
  background-color: transparent;
  border: 1px solid darkblue;
  border-top: none;
  cursor: pointer;
`;

export const ChatUI = styled("div")`
  #pagewrap {
    max-width: 100%;
    margin: 3vh auto;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  header {
    margin: 0 auto;
    display: block;
    padding: 20px 15px;
    color: #666;
    background-color: #f5f8f9;
    border-bottom: 1px solid black;
  }

  header h3 {
    font-weight: 400;
    text-align: center;
  }

  .chatbox {
    background-color: #f5f8f9;
    padding: 10px 20px;
    width: 100%;
    height: 400px;
    overflow-y: auto;
  }

  .time {
    text-align: center;
    font-size: 0.9em;
    color: #666;
    margin-top: 30%;
    letter-spacing: 1.2px;
    word-spacing: 2px;
  }

  #message {
    width: 100%;
  }

  .m-left {
    max-width: 70%;
    min-width: 10%;
    display: flex;
    font-size: 0.85em;
    position: relative;
    margin: 20% 0 3% 0;
    animation: scaler 150ms ease-out;
    float: left;
  }

  .m-left:after {
    content: "";
    display: block;
    position: absolute;
    left: -10px;
    top: 0;
    width: 0;
    border-width: 10px 10px 0;
    border-style: solid;
    border-color: #444 transparent;
  }

  .m-left {
    background-color: #444;
    color: #fff;
    font-size: 1em;
    border-radius: 10px;
    position: relative;
    padding: 10px;
    margin: 1% 0;
    max-width: 70%;
    min-width: 10%;
    float: left;
    word-wrap: break-word;
    clear: both;
    animation: scaler 150ms ease-out;
    font-weight: 500;
  }

  #message:before,
  #message:after {
    content: "";
    display: block;
    clear: both;
  }

  .m-right {
    background-color: #e5eaec;
    color: #222;
    font-size: 1em;
    border-radius: 10px;
    position: relative;
    padding: 10px;
    margin: 1% 0;
    max-width: 70%;
    min-width: 10%;
    float: right;
    word-wrap: break-word;
    clear: both;
    animation: scaler 150ms ease-out;
    font-weight: 500;
  }

  .m-right:after {
    content: "";
    display: block;
    position: absolute;
    right: -10px;
    top: 0;
    width: 0;
    border-width: 10px 10px 0;
    border-style: solid;
    border-color: #e5eaec transparent;
  }

  .reply {
    padding: 15px 25px;
    margin: 0 auto;
    border-top: 1px solid black;
    background-color: #f5f8f9;
    width: 100%;
  }

  .reply:before,
  .reply:after {
    content: "";
    display: block;
    clear: both;
  }

  input,
  button {
    float: left;
    margin: 3px;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0;
    flex: 1 1 0;
  }

  input {
    width: 75%;
    min-height: 60px;
    padding: 15px;
    border-style: inset;
    border: 0.5px solid black;
    margin: 0;
    font-size: 1.2em;
    background-color: inherit;
  }

  input:focus,
  button:focus {
    outline: 0;
  }

  button {
    background-color: #222;
    color: #fff;
    min-height: 60px;
    margin: 0;
    margin-left: -2px;
    padding: 15px 0;
    width: 25%;
    vertical-align: middle;
    border: 2px solid black;
    cursor: pointer;
    letter-spacing: 1.2px;
  }

  @keyframes scaler {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;
