import { Row, Col, Modal } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import {
  MiddleBlockSection,
  Content,
  ContentWrapper,
  StyledModal,
} from "./styles";
import { useState } from "react";

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
        <Slide direction="up">
          <Row justify="center" align="middle">
            <ContentWrapper>
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
              <Row>
                {typeof logo === "object" &&
                  logo.map((item: any, id: number) => {
                    return (
                      <Col
                        key={id}
                        span={4}
                        onClick={() => handleLogoClick(item)}
                      >
                        <p>{item.icon}</p>
                        <p>{item.title}</p>
                      </Col>
                    );
                  })}
              </Row>
              <StyledModal
                className="fullscreen-modal"
                title={logoData.title}
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={"80%"}
              >
                <p>{logoData.svg}</p>
              </StyledModal>
            </ContentWrapper>
          </Row>
        </Slide>
      </MiddleBlockSection>
    </>
  );
};

export default withTranslation()(LogoContent);
