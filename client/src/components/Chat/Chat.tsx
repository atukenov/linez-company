import React, { useEffect, useState } from "react";
import { ChatUI } from "./styles";
import { Button } from "antd";

const Chat = () => {
  return (
    <ChatUI>
      <div id="pagewrap">
        <header>
          <h3 className="name">Admin</h3>
        </header>

        <section className="chatbox">
          <ul id="message">
            <div className="time">Last updated: 10:08</div>
            <li className="m-left">
              If anybody wanted to photograph my life, they'd get bored in a
              day.
            </li>
            <li className="m-right">You gotteh be kiddin mi.</li>
          </ul>
        </section>

        <section className="reply" id="reply">
          <form>
            <input type="text" placeholder="Type something" />
            <button>Send</button>
          </form>
        </section>
      </div>
    </ChatUI>
  );
};

export default Chat;
