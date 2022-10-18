import styled from "styled-components";

export const CustomPopUp = styled("div")<any>`
  visibility: hidden;

  .overlay {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
    backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 250ms ease;
  }

  .popup {
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 80%;
    height: 80%;
    position: relative;
    transition: all 250ms ease;
  }

  .zoom-in {
    animation: zoom-in-zoom-out 1s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0, 0);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .popup h2 {
    margin-top: 0;
    color: #333;
  }

  .popup .close {
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }

  .popup .close:hover {
    cursor: pointer;
    color: red;
  }

  .popup .content {
    height: 80%;
    overflow: auto;
  }

  @media screen and (max-width: 700px) {
    .popup {
      width: 90%;
      height: calc(100% - 40px);
      margin: 20px auto;
    }
  }
`;
