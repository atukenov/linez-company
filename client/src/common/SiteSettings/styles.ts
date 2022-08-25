import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  .ant-layout-sider,
  .ant-layout-sider-trigger {
    background: ${(x) => (x.sider ? x.sider : "#001529")};
  }

  .ant-layout-sider-children .logo {
    background: ${(x) => (x.logo ? x.logo : "#ffffff33")};
  }

  .ant-layout-footer {
    background: ${(x) => (x.footer ? x.footer : "#f0f2f5")};
  }

  .ant-layout {
    background: ${(x) => (x.content ? x.content : "#f0f2f5")};
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 414px) {
  }
`;
