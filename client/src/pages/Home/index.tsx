import { lazy, useState } from "react";
import IntroContent from "../../content/IntroContent.json";
import ContactContent from "../../content/ContactContent.json";
import LogoContent from "../../content/LogoContent.json";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../common/Container";
import Contact from "../../components/ContactForm";
import ContentBlock from "../../components/ContentBlock";
import ContentItem from "../../components/ContentItem";
import BackgroundImage from "../../common/BackgroundImage";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  const [scale, setScale] = useState(1);

  const handleScale = () => {
    if (scale === 1) setScale(scale * 2);
    else setScale(scale / 2);
  };

  return (
    <>
      <Header isMenu={true} />
      <ScrollToTop />
      <div onClick={handleScale}>
        <BackgroundImage backgroundImage="url('/img/body.jpg')" scale={scale}>
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
          </Container>
        </BackgroundImage>
      </div>
      <hr />
      {/* <MiddleBlock
          title={MiddleContent.title}
          content={MiddleContent.text}
          button={MiddleContent.button}
          logo={MiddleContent.logo}
        /> */}
      {/* <ContentBlock
          type="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="graphs.svg"
          id="newabout"
        /> */}
      {/* <ContentBlock
          type="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="mission"
        />
        <ContentBlock
          type="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
        /> */}
      <Container>
        <ContentItem
          title={LogoContent.title}
          content={LogoContent.text}
          button={LogoContent.button}
          logo={LogoContent.logo}
          id="portfolio"
        />
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
