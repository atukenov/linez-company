import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleContent from "../../content/MiddleContent.json";
import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import LogoContent from "../../content/LogoContent.json";

import Header from "../../components/Header";
import Container from "../../common/Container";
import Contact from "../../components/ContactForm";
import ContentBlock from "../../components/ContentBlock";
import LogoContentBlock from "../../components/LogoContent";
import MiddleBlock from "../../components/MiddleBlock";
import Slideshow from "../../common/Slideshow";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <>
      <Header isMenu={true} />
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="fonts.svg"
          id="about"
        />
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
        <LogoContentBlock
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
    </>
  );
};

export default Home;
