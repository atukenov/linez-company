import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const BackgroundImage = ({
  border,
  backgroundImage,
  children,
}: ContainerProps) => (
  <StyledContainer backgroundImage={backgroundImage}>
    {children}
  </StyledContainer>
);

export default BackgroundImage;
