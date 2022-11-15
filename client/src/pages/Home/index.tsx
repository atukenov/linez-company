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
import { Col, Row } from "antd";
import Modal from "../../common/Modal";
import { Welcome, Button, Wrapper, Cont, BellDoor, Bzzz } from "./styles";

const Home = () => {
  const [openIT, setOpenIT] = useState(false);
  const [openID, setOpenID] = useState(false);
  const [openGD, setOpenGD] = useState(false);

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

  return (
    <>
      <div id="top" />
      <Wrapper>
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
          fz="1.5vw"
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

        <Button top="80.5%" left="44.1%" fz="1.5vw">
          Knock! Knock!
        </Button>
        {/* <Bzzz top="82.4%" left="67.1%" fz="2vw">
            <span>B</span>
            <span>Z</span>
            <span>Z</span>
            <span>Z</span>
            <span>Z</span>
            <span>Z</span>
            <span>Z</span>
            <span>Z</span>
            <span>Z</span>
            <span>Z</span>
            <span>T</span>
          </Bzzz> */}

        <img
          className="background-image"
          src="./img/web.jpg"
          alt="background"
        />
      </Wrapper>
      <Header isMenu={true} />
      {openIT && (
        <Modal title="Web Designing otdel" trigger={() => handleClick("IT")} />
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
