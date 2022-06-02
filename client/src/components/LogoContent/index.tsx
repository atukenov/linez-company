import { Row, Col, Modal } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { Ticker } from "../../common/Ticker";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import Item from "antd/lib/list/Item";
import { useState } from "react";
import { Link } from "react-router-dom";

interface LogoContentProps {
  title: string;
  content: string;
  button: string;
  logo?: any;
  t: any;
}

const LogoContent = ({ title, content, button, logo, t }: LogoContentProps) => {
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
      <MiddleBlockSection>
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
                        <Link to={`/logo/${item.id}`}>
                          <p>{item.icon}</p>
                          <p>{item.title}</p>
                        </Link>
                      </Col>
                    );
                  })}
              </Row>
              <Modal
                className="fullscreen-modal"
                title={logoData.title}
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
              >
                <p>{logoData.svg}</p>
              </Modal>
            </ContentWrapper>
          </Row>
        </Slide>
      </MiddleBlockSection>
    </>
  );
};

export default withTranslation()(LogoContent);
