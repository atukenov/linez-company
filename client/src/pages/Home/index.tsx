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
import { Welcome, Button, Wrapper, WrapperEnvelope, View } from "./styles";

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
    }, 4000);
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

        <Button top="80.5%" left="44.1%" fz="1.5vw" onClick={handleForm}>
          Knock! Knock!
        </Button>
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
      {openForm && (
        <View>
          <WrapperEnvelope className={sent ? "sent" : ""}>
            <div className="wrapper centered">
              <article className="letter">
                <div className="side">
                  <h1>Contact us</h1>
                  <p>
                    <textarea placeholder="Your message"></textarea>
                  </p>
                </div>
                <div className="side">
                  <p>
                    <input type="text" placeholder="Your name" />
                  </p>
                  <p>
                    <input type="email" placeholder="Your email" />
                  </p>
                  <p>
                    <button onClick={handleSubmitForm}>Send</button>
                    <button onClick={handleForm}>Close</button>
                  </p>
                </div>
              </article>
              <div className="envelope front"></div>
              <div className="envelope back"></div>
            </div>
            <p className="result-message centered">
              Thank you for your message
            </p>
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
