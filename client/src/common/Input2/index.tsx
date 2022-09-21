import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import * as Input2 from "antd";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, t }: InputProps) => (
  <Container>
    <div className="page">
      <div className="field field_v2">
        <label className="ha-screen-reader">{name}</label>
        <Input2.Input
          className="field__input"
          placeholder={"e.g " + placeholder}
        />
        <span className="field__label-wrap" aria-hidden="true">
          <span className="field__label">{name}</span>
        </span>
      </div>
    </div>
  </Container>
);

export default withTranslation()(Input);
