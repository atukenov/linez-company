import styled from "styled-components";

export const StyledRegisterUser = styled("div")`
  .pt-1 {
    padding-top: 1rem;
  }
`;

export const BackgroundContainer = styled.div`
  background: linear-gradient(110deg, #0818a8 80%, #565c95);
  display: flex;
  height: 100%;

  @media (max-width: 390px) {
    background: linear-gradient(170deg, #0818a8 80%, #565c95);
  }
`;
