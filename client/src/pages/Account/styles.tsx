import styled from "styled-components";

export const Container = styled.div`
  /* height: 100vh; */
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
  height: 63px;
  background-color: #0818a8;
  color: white;
`;

export const Left = styled.div``;

export const BurgerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 2.5em;
  height: 28px;
  cursor: pointer;
`;
export const BurgerBar = styled.div`
  display: block;
  width: 100%;
  height: 4px;
  background-color: white;
  border-radius: 10px;
  transition: all 600ms ease-in-out;

  &.active:first-child {
    background-color: white;
    transform: rotate(405deg);
    transform-origin: top left;
  }
  &.active:nth-child(2) {
    transform: rotate(360deg);
    background-color: #0818a8;
    z-index: -1;
  }
  &.active:last-child {
    background-color: white;
    transform: rotate(-405deg);
    transform-origin: bottom left;
  }
`;

export const Logo = styled.h4`
  a {
    color: white;
    font-size: 20px;
    font-weight: 900;
  }
`;

export const Content = styled.div`
  position: relative;
  height: calc(100vh - 163px);

  background-color: #fff;
`;

export const Sider = styled.div`
  position: absolute;
  left: 0;
  top: 63px;
  width: 30%;
  min-width: 300px;
  height: calc(100vh - 163px);
  background-color: white;
  z-index: 100;
  transition: left 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);

  &.inactive {
    left: min(calc(-30%), -300px);
  }

  .ant-menu-inline {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  height: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #0818a8;
  height: 100px;
`;
export const Footer = styled.h4`
  color: white;
  padding: 0 50px;
  font-size: 20px;
  font-weight: 200;
`;
