import { StyledContainer } from "./styles";
import { StyleProps } from "../types";

const BackgroundImage = ({ scale, backgroundImage, children }: StyleProps) => (
  <StyledContainer backgroundImage={backgroundImage} scale={scale}>
    {children}
  </StyledContainer>
);

export default BackgroundImage;
