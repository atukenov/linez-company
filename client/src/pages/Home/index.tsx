import { lazy, useState } from "react";
import IntroContent from "../../content/IntroContent.json";
import ContactContent from "../../content/ContactContent.json";
import LogoContent from "../../content/LogoContent.json";

import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";
import Container from "../../common/Container";
import Contact from "../../components/Home/ContactForm";
import ContentBlock from "../../components/Home/ContentBlock";
import MiddleBlock from "../../components/Home/MiddleBlock";
import PopUp from "../../common/PopUp";
import { Col, Row } from "antd";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <>
      <Header isMenu={true} />
      <ScrollToTop />
      <Container>
        <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="fonts.svg"
          id="about"
          backgroundImg="black"
        />

        <PopUp title="Logo">
          <Row>
            <Col lg={12} md={12} sm={12} xs={24} style={{ maxHeight: "100%" }}>
              <h3>Interior Design</h3>
              <p>Description for this process</p>
            </Col>
            <Col lg={12} md={12} sm={12} xs={24}>
              <p>Gallery</p>
            </Col>
          </Row>
        </PopUp>
        <hr />
      </Container>

      <Container>
        <MiddleBlock
          title={LogoContent.title}
          content={LogoContent.text}
          button={LogoContent.button}
          id="portfolio"
        />
        <PopUp title="Interior">
          <h1>fdsafas</h1>
          <h2>fdsafsad</h2>
        </PopUp>
        <hr />
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
