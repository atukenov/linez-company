import { withTranslation } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
  t: any;
}

const Block = ({ title, content, t }: Props) => {
  return (
    <Container>
      <h2>{t(title)}</h2>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
