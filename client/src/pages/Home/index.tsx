import { lazy, useEffect, useState } from "react";
import IntroContent from "../../content/IntroContent.json";
import ContactContent from "../../content/ContactContent.json";
import LogoContent from "../../content/LogoContent.json";

import Header from "../../components/Header";
import Container from "../../common/Container";
import Contact from "../../components/ContactForm";
import ContentBlock from "../../components/ContentBlock";
import LogoContentBlock from "../../components/LogoContent";
import MoveOnScroll from "../../common/MoveOnScroll";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  const [bgImg, setBgImg] = useState(
    "url('https://thumbs.dreamstime.com/b/white-blue-sky-soft-clouds-87734640.jpg')"
  );
  const [opacity, setOpacity] = useState(1);
  const H = document.documentElement.scrollHeight;
  useEffect(() => {
    const onScroll = () => console.log(H);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header isMenu={true} />
      {/* <MoveOnScroll direction="right"/> */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: H,
          backgroundImage: bgImg,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: opacity,
        }}
      ></div>
      <Container>
        <ScrollToTop />

        <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="fonts.svg"
          id="about"
          backgroundImg="black"
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
