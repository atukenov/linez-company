import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import i18n from "i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

const Header = ({ t, isMenu }: any) => {
  const [visible, setVisibility] = useState(false);

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        {isMenu && (
          <>
            <CustomNavLinkSmall onClick={() => scrollTo("about")}>
              <Span>{t("About")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={() => scrollTo("portfolio")}>
              <Span>{t("Portfolio")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall
              style={{ width: "180px" }}
              onClick={() => scrollTo("contact")}
            >
              <Span>
                <Button>{t("Contact")}</Button>
              </Span>
            </CustomNavLinkSmall>
          </>
        )}
        <CustomNavLinkSmall>
          <LanguageSwitchContainer>
            <LanguageSwitch onClick={() => handleChange("en")}>
              <SvgIcon
                src="united-states.svg"
                aria-label="homepage"
                width="30px"
                height="30px"
              />
            </LanguageSwitch>
            <LanguageSwitch onClick={() => handleChange("ru")}>
              <SvgIcon
                src="russia.svg"
                aria-label="homepage"
                width="30px"
                height="30px"
              />
            </LanguageSwitch>
          </LanguageSwitchContainer>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo-text.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
