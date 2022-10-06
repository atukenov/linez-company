import { StyledContainer } from "./styles";

interface Props {
  children: React.ReactNode;
}

const LoadingContainer = ({ children }: Props) => (
  <StyledContainer>
    <div className="background"></div>
    <div className="banter-loader">
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
    </div>
    {children}
  </StyledContainer>
);

export default LoadingContainer;
