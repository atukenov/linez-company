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
import { Welcome, Button, FirstButton, Wrapper, Cont } from "./styles";

const Home = () => {
  const [openIT, setOpenIT] = useState(false);

  const handleClick = (t: string) => {
    setOpenIT((prev) => !prev);
  };

  return (
    <>
      <div id="top" />
      <Wrapper>
        <img
          className="background-image"
          src="./img/web.jpg"
          alt="background"
        />
        <Cont>
          <Button onClick={() => handleClick("IT")}>Click me</Button>
        </Cont>
        <Welcome>Welcome</Welcome>
      </Wrapper>
      <Header isMenu={true} />

      <ScrollToTop />
      {openIT && <Modal title="IT otdel" trigger={() => handleClick("IT")} />}
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
