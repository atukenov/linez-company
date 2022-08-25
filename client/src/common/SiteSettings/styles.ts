import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  .ant-layout-sider,
  .ant-layout-sider-trigger {
    background: ${(x) => (x.sider ? x.sider : "#001529")};
  }

  .ant-layout-sider ul {
    background-color: ${(x) => (x.sider ? x.sider : "#001529")};
  }

  .ant-layout-sider ul > li:hover {
    background-color: #323232;
  }

  .ant-layout-sider-children .logo {
    background: ${(x) => (x.logo ? x.logo : "#ffffff33")};
  }

  .ant-menu-submenu-active {
    color: #1890ff !important;
  }

  .ant-layout-sider .ant-menu li {
    color: white;
  }

  .site-layout-background {
    background-color: #fefeff;
  }

  .ant-layout-footer {
    background: ${(x) => (x.footer ? x.footer : "#f0f2f5")};
    color: white;
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
