import React, { FC, useEffect, useRef, useState } from "react";
import { ChatUI } from "./styles";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  chatSelector,
  receiveAllMessage,
  sendMessage,
} from "../../slices/chatSlice";
import { authSelector } from "../../slices/authSlice";
import socket from "../../common/utils/socket";

interface ChatProps {
  state: {
    step: number;
  };
}

const Chat: FC<ChatProps> = ({ state }) => {
  const dispatch = useAppDispatch();
  const chat = useAppSelector(chatSelector);
  const isAdmin = useAppSelector(authSelector).isAdmin;
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [message, setMessage] = useState(chat.allMessage);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socket.on("receiveMessage", (message2) => {
      setMessage([...message, message2]);
    });
  }, [message]);

  useEffect(() => {
    dispatch(receiveAllMessage(state.step.toString()));
  }, [dispatch, state.step]);

  useEffect(() => {
    setMessage(chat.allMessage);
  }, [chat.allMessage]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const hClick = (e: any) => {
    e.preventDefault();
    if (newMessage.length > 0) {
      setMessage([...message, { message: newMessage, sender: false }]);
      dispatch(sendMessage(newMessage));
    }
    setNewMessage("");
  };

  return (
    <ChatUI>
      <div id="pagewrap">
        <header>
          <h3 className="name">Admin</h3>
        </header>

        <section className="chatbox">
          <ul id="message">
            <div className="time">Last updated: 10:08</div>
            {message.map((item, index) => {
              return !isAdmin ? (
                <li key={index} className={item.sender ? "m-left" : "m-right"}>
                  {item.message}
                </li>
              ) : (
                <li key={index} className={item.sender ? "m-right" : "m-left"}>
                  {item.message}
                </li>
              );
            })}
          </ul>
          <div ref={bottomRef} />
        </section>

        <section className="reply" id="reply">
          <form>
            <input
              type="text"
              placeholder="Type something"
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
            />
            <button onClick={hClick}>Send</button>
          </form>
        </section>
      </div>
    </ChatUI>
  );
};

export default Chat;
