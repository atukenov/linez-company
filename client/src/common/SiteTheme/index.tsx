import { StyledContainer } from "./styles";
import { SiteThemeProps } from "../types";

const SiteTheme = ({
  sider,
  content,
  footer,
  header,
  logo,
  children,
}: SiteThemeProps) => (
  <StyledContainer
    sider={sider}
    content={content}
    footer={footer}
    header={header}
    logo={logo}
  >
    {children}
  </StyledContainer>
);

export default SiteTheme;
