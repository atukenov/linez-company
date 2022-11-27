import { lazy, useState } from "react";
import styled from "styled-components";

import IntroContent from "../../content/IntroContent.json";
import ContactContent from "../../content/ContactContent.json";
import LogoContent from "../../content/LogoContent.json";

import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";
import Container from "../../common/Container";
import Contact from "../../components/Home/ContactForm";
import ContentBlock from "../../components/Home/ContentBlock";
import MiddleBlock from "../../components/Home/MiddleBlock";
import PopUp from "../../common/Modal";
import ScrollToTop from "../../common/ScrollToTop";
import Modal from "../../common/Modal";
import {
  Welcome,
  Button,
  Wrapper,
  WrapperEnvelope,
  View,
  H1,
  P,
  Input,
  Button2,
  Textarea,
  DoorbellCircle,
  Left,
  Right,
  Template,
  Icon,
  Desc,
  List,
  Item,
} from "./styles";
import { Bounce } from "react-awesome-reveal";
import { SvgIcon } from "../../common/SvgIcon";

const Home = () => {
  const [openIT, setOpenIT] = useState(false);
  const [openID, setOpenID] = useState(false);
  const [openGD, setOpenGD] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [sent, setSent] = useState(false);

  const handleClick = (t: string) => {
    switch (t) {
      case "IT":
        setOpenIT((prev) => !prev);
        break;
      case "ID":
        setOpenID((prev) => !prev);
        break;
      case "GD":
        setOpenGD((prev) => !prev);
        break;
    }
  };

  const handleForm = () => {
    setOpenForm((prev) => !prev);
  };

  const handleSubmitForm = () => {
    setSent((prev) => !prev);
    setTimeout(() => {
      setOpenForm((prev) => !prev);
      setSent((prev) => !prev);
    }, 8000);
  };

  return (
    <>
      <div id="top" />
      <Wrapper className={openForm ? "open" : "closed"}>
        <Button
          top="32.25%"
          left="9.6%"
          fz="1.5vw"
          onClick={() => handleClick("IT")}
        >
          Web Design
        </Button>

        <Button
          top="47%"
          left="44%"
          fz="1.3vw"
          onClick={() => handleClick("ID")}
        >
          Interior Design
        </Button>
        <Button
          top="61.7%"
          left="78.8%"
          fz="1.2vw"
          onClick={() => handleClick("GD")}
        >
          Graphic Design
        </Button>
        <Welcome top="80.4%" left="80.8%" fz="2vw">
          Welcome to <br />
          LineZ House
        </Welcome>
        <DoorbellCircle top="77%" left="48.2%" fz="1.5vw" onClick={handleForm}>
          <SvgIcon src="doorbell.svg" height="70%" width="70%" />
        </DoorbellCircle>

        <img
          className="background-image"
          src="./img/web.jpg"
          alt="background"
        />
      </Wrapper>
      <Header isMenu={true} />
      {openIT && (
        <Modal title="Web Design" trigger={() => handleClick("IT")}>
          <Template>
            <Left>
              <Icon>Web</Icon>
              <Desc>web bla bla bla</Desc>
            </Left>
            <Right>
              <List>
                <Item>
                  <img src="./img/svg/about.svg" width="100%" height="100%" />
                </Item>
                <Item>Project 2</Item>
                <Item>Project 3</Item>
              </List>
              <List>
                <Item>Project 4</Item>
                <Item>Project 5</Item>
              </List>
            </Right>
          </Template>
        </Modal>
      )}
      {openID && (
        <Modal
          title="Interior Designing otdel"
          trigger={() => handleClick("ID")}
        />
      )}
      {openGD && (
        <Modal
          title="Graphic Designing otdel"
          trigger={() => handleClick("GD")}
        />
      )}
      {openForm && (
        <View>
          <WrapperEnvelope className={sent ? "sent" : ""}>
            <div className="wrapper centered">
              <article className="letter">
                <div className="side">
                  <H1>Contact us</H1>
                  <P>
                    <Textarea placeholder="Your message"></Textarea>
                  </P>
                </div>
                <div className="side">
                  <P>
                    <Input type="text" placeholder="Your name" />
                  </P>
                  <P>
                    <Input type="text" placeholder="Your number" />
                  </P>
                  <P>
                    <Button2 onClick={handleSubmitForm}>Send</Button2>
                    <Button2 onClick={handleForm}>Close</Button2>
                  </P>
                </div>
              </article>
              <div className="envelope front"></div>
              <div className="envelope back"></div>
            </div>
            <P className="result-message centered">
              Thank you for your message!
              <br /> We will come back to you soon!
            </P>
          </WrapperEnvelope>
        </View>
      )}

      <ScrollToTop />

      {/* <Container>
        <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="fonts.sv"
          id="about"
          backgroundImg="black"
        />

        <hr />
      </Container>

      <Container>
        <MiddleBlock
          title={LogoContent.title}
          content={LogoContent.text}
          button={LogoContent.button}
          id="portfolio"
        />

        <hr />
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
      <Footer /> */}
    </>
  );
};

export default Home;
