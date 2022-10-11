import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
  background-color: #0b011d;
  color: white;
`;

export const Sider = styled.div``;

export const SiderMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background-color: #cfcfcf;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;

  &.hidden {
    visibility: hidden;
    width: 0;
  }
`;

export const CloseIcon = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 15px 15px 5px 15px;
`;

export const CustomCloseIcon = styled(CloseOutlined)`
  color: black;
  font-size: 20px;
`;

export const Logo = styled.h2`
  color: white;
`;

export const LogOut = styled.div``;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #e2e2e2;
  color: black;
  font-weight: 800;
  letter-spacing: 1px;
  padding: 15px;
  border-radius: 50%;
`;

export const Content = styled.div`
  background-color: gray;
  height: 100px;
`;
