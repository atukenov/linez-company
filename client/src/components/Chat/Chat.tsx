import React, { FC, useEffect, useRef, useState } from "react";
import {
  Body,
  Container,
  Footer,
  Header,
  Input,
  Message,
  Messages,
  Send,
  Time,
} from "./styles";
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
    logo: string | undefined;
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
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    socket.on("receiveMessage", (item) => {
      if (item.logo === state.logo)
        setMessage([
          ...message,
          { message: item.message, sender: item.sender },
        ]);
    });
  }, [isAdmin, message, state]);

  useEffect(() => {
    socket.on("isTyping", (item) => {
      setHidden(item);
    });
  }, []);

  useEffect(() => {
    dispatch(receiveAllMessage(state));
  }, [dispatch, state]);

  useEffect(() => {
    setMessage(chat.allMessage);
  }, [chat.allMessage]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const hClick = (e: any) => {
    e.preventDefault();
    if (newMessage.length > 0) {
      setMessage([
        ...message,
        { message: newMessage, sender: isAdmin as boolean },
      ]);
      dispatch(
        sendMessage({
          logo: state.logo,
          step: state.step,
          message: newMessage,
          sender: isAdmin as boolean,
        })
      );
    }
    setNewMessage("");
    socket.emit("typing", true);
  };

  const hChange = (e: any) => {
    setNewMessage(e.target.value);
    if (e.target.value !== "") socket.emit("typing", false);
    else socket.emit("typing", true);
  };

  return (
    <Container>
      <Header>Admin</Header>
      <Body>
        <Messages>
          <Time>10/13/2022 14:30</Time>
          {message.map((item, i) => {
            return isAdmin ? (
              <Message key={i} className={item.sender ? "sender" : "receiver"}>
                {item.message}
              </Message>
            ) : (
              <Message key={i} className={!item.sender ? "sender" : "receiver"}>
                {item.message}
              </Message>
            );
          })}

          <span
            style={{
              textAlign: "end",
            }}
            hidden={hidden}
          >
            ... Typing
          </span>
          <div ref={bottomRef} />
        </Messages>
      </Body>
      <Footer>
        <Input value={newMessage} onChange={hChange} />
        <Send onClick={hClick}>Send</Send>
      </Footer>
    </Container>
    // <ChatUI>
    //   <div id="pagewrap">
    //     <header>
    //       <h3 className="name">Admin</h3>
    //     </header>

    //     <section className="chatbox">
    //       <ul id="message">
    //         <div className="time">Last updated: 10:08</div>
    //         {message.map((item, index) => {
    //           return !isAdmin ? (
    //             <li key={index} className={item.sender ? "m-left" : "m-right"}>
    //               {item.message}
    //             </li>
    //           ) : (
    //             <li key={index} className={item.sender ? "m-right" : "m-left"}>
    //               {item.message}
    //             </li>
    //           );
    //         })}
    //       </ul>
    //       <div ref={bottomRef} />
    //     </section>
    //     <div
    //       style={{
    //         textAlign: "end",
    //         marginRight: 25,
    //         fontWeight: 600,
    //         backgroundColor: "#f5f8f9",
    //       }}
    //       hidden={hidden}
    //     >
    //       ... Typing
    //     </div>
    //     <section className="reply" id="reply">
    //       <form>
    //         <input
    //           type="text"
    //           placeholder="Type something"
    //           onChange={hChange}
    //           value={newMessage}
    //         />
    //         <button onClick={hClick}>Send</button>
    //       </form>
    //     </section>
    //   </div>
    // </ChatUI>
  );
};

export default Chat;
