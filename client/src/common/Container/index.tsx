import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, isHeight, children }: ContainerProps) => (
  <StyledContainer border={border} isHeight={isHeight}>
    {children}
  </StyledContainer>
);

export default Container;
