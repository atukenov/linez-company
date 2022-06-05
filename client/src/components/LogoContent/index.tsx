import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, AttentionSeeker } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { useState } from "react";
import Slideshow from "../../common/Slideshow";

import {
  MiddleBlockSection,
  Content,
  ContentWrapper,
  StyledModal,
} from "./styles";
import Ticker from "../../common/Ticker";

interface LogoContentProps {
  title: string;
  content: string;
  button: string;
  logo?: any;
  id: string;
  t: any;
}

const LogoContent = ({
  title,
  content,
  button,
  logo,
  t,
  id,
}: LogoContentProps) => {
  const [visible, setVisible] = useState(false);
  const [logoData, setLogoData] = useState({ title: "", svg: "" });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleLogoClick = (item: any) => {
    setLogoData(item);
    setVisible(true);
  };

  return (
    <>
      <MiddleBlockSection id={id}>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <AttentionSeeker effect="tada">
              <Row>
                <Col lg={24} md={24} sm={24} xs={24}>
                  <h6>{t(title)}</h6>
                  <Content>{t(content)}</Content>
                  {button && (
                    <Button name="submit" onClick={() => scrollTo("mission")}>
                      {t(button)}
                    </Button>
                  )}
                </Col>
              </Row>
            </AttentionSeeker>
            <Slide triggerOnce direction="left">
              <Row>
                <Ticker
                  data={logo}
                  onClick={(item: any) => handleLogoClick(item)}
                />

                {/* {typeof logo === "object" &&
                  logo.map((item: any, id: number) => {
                    return (
                      <Col
                        key={id}
                        span={8}
                        onClick={() => handleLogoClick(item)}
                      >
                        <p>{item.icon}</p>
                        <p>{item.title}</p>
                      </Col>
                    );
                  })} */}
              </Row>
            </Slide>
            <StyledModal
              className="fullscreen-modal"
              title={logoData.title}
              centered
              visible={visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
              width={"80%"}
            >
              <Row align="top" justify="center" style={{ height: "100%" }}>
                <Col
                  lg={8}
                  md={8}
                  sm={24}
                  xs={24}
                  style={{
                    textAlign: "center",
                    paddingRight: "25px",
                  }}
                >
                  <Slideshow data={logoData} />
                </Col>
                <Col
                  lg={16}
                  md={16}
                  sm={24}
                  xs={24}
                  style={{ textAlign: "left", padding: "0 30px" }}
                >
                  <h1 style={{ marginBottom: 0 }}>Description</h1>
                  <hr style={{ border: "1px solid #1d1e18" }} />
                  <p>
                    Sed auctor nisi ac ligula tincidunt, eu consectetur mi
                    cursus. Donec a erat quis nisi mollis suscipit ut at lacus.
                    Aliquam tristique ex a ipsum maximus finibus. Cras aliquam
                    ac libero cursus accumsan. Quisque ut urna quam. Nunc id
                    nisi sit amet ligula convallis volutpat. In hac habitasse
                    platea dictumst. Vestibulum tempus iaculis pellentesque.
                    Aenean luctus congue nisi, id tristique nibh placerat at.
                    Phasellus leo nibh, tincidunt vitae laoreet ultricies,
                    congue eget ipsum. Aenean vitae vestibulum lectus. Orci
                    varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Donec pellentesque magna tempus
                    accumsan porta. Nulla egestas arcu sit amet sapien
                    scelerisque, commodo porta leo hendrerit. Duis et elementum
                    enim.
                  </p>
                </Col>
              </Row>
            </StyledModal>
          </ContentWrapper>
        </Row>
      </MiddleBlockSection>
    </>
  );
};

export default withTranslation()(LogoContent);
