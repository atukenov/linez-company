import React from "react";
import { ChatUI } from "./styles";

const Chat = () => {
  return (
    <ChatUI>
      <div className="center">
        <div className="chat">
          <div className="contact bar">
            <div className="pic start"></div>
            <div className="name">Tony Stark</div>
            <div className="seen">Today at 12:56</div>
          </div>
          <div id="chat" className="messages">
            <div className="time">Today at 11:41</div>
            <div className="message parker">Hey man</div>
            <div className="message stark">Kid,</div>
            <div className="message parker">Field trip!</div>
            <div className="message parker">Uh, what is this guy's problem</div>
            <div className="message stark">
              Uh, he's from space, he came here
            </div>
            <div className="message stark">and bla bla bla</div>
          </div>
          <div className="input">
            <input type="text" placeholder="Type your message here!" />
          </div>
        </div>
      </div>
    </ChatUI>
  );
};

export default Chat;
