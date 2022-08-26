import styled from "styled-components";

export const StyledContainer = styled("div")`
  .logo {
    height: 60px;
    /* margin: 12px; */
    padding: 10px;
    font-family: "GloriaHallelujah Regular", sans-serif;
    text-align: center;
    font-size: 1.6rem;
    color: white;
    font-weight: 1100;
  }

  .ant-menu-submenu .ant-menu-submenu-arrow {
    color: white;
  }

  .ant-menu-item-selected a {
    color: #1890ff !important;
  }

  .ant-menu-item-selected,
  .ant-menu-submenu-selected {
    background-color: #2c2c2c;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #2c2c2c;
  }

  .ant-menu-submenu-popup,
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #2c2c2c;
  }

  .ant-menu-inline .ant-menu-item:after,
  .ant-menu-vertical-left .ant-menu-item:after,
  .ant-menu-vertical-right .ant-menu-item:after,
  .ant-menu-vertical .ant-menu-item:after {
    border-right: 3px solid #ffffff;
  }

  .ant-menu-inline,
  .ant-menu-inline-collapsed {
    border: none;
  }

  .ant-menu-item a {
    color: white;
  }
`;
