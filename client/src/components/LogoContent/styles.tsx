import styled from "styled-components";
import { Modal } from "antd";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StyledModal = styled((props) => <Modal {...props} />)`
  .ant-modal-title {
    text-align: center;
    font-size: 25px;
    font-weight: 900;
  }
  .ant-modal-header {
    background: #faf3dd;
    border-bottom: 1px solid #1d1e18;
  }
  .ant-modal-body {
    background: #faf3dd;
    border-bottom: 1px solid #1d1e18;
  }
  .ant-modal-footer {
    background: #faf3dd;
    display: none;
  }
  .ant-modal-close {
    background: #bdd5ae;
    border-bottom: 1px solid #1d1e18;
    height: 55px;
  }
  .ant-modal-body {
    height: calc(100vh - 35vh) !important;
  }

  .ant-btn {
    background: #1d1e18;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    border: 1px solid #edf3f5;
    border-radius: 4px;

    cursor: pointer;

    max-width: 180px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

    &:hover,
    &:active,
    &:focus {
      color: #000;
      border: 1px solid #bdd5ae;
      background-color: #bdd5ae;
    }
  }
`;
