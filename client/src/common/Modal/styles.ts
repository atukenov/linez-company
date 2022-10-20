import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";

export const Container = styled(Zoom)`
  position: fixed;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background-color: gray;
  width: 80%;
  height: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 63px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  padding-left: 25px;
`;

export const CloseIcon = styled.span`
  padding: 10px;
  font-size: 27px;
  font-weight: 700;
  margin-right: 15px;
  cursor: pointer;
`;

export const Body = styled.div`
  background-color: whitesmoke;
  padding: 10px 25px;
  height: 100%;
  width: 100%;
  overflow: auto;
`;
