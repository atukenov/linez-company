import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  background-image: ${(x) => (x.backgroundImage ? x.backgroundImage : "")};
  background-repeat: no-repeat;
  background-size: cover;
  transform: ${(x) => (x.scale ? `scale(${x.scale})` : "")};
  height: 1199px;
  transition: 0.4s;

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
