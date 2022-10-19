import React, { FC } from "react";
import { Body, CloseIcon, Container, Header, Title, Wrapper } from "./styles";

interface ModalProps {
  children?: React.ReactNode;
  trigger?: () => void;
  title?: string;
}

const Modal: FC<ModalProps> = ({ trigger, children, title }) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>{title}</Title>
          <CloseIcon onClick={trigger}>X</CloseIcon>
        </Header>
        <Body>{children}</Body>
      </Wrapper>
    </Container>
  );
};

export default Modal;
