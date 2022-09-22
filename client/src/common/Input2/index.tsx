import { withTranslation } from "react-i18next";
import { StyledInput } from "./styles";
import { InputProps } from "../types";
import { Form, Input as I2 } from "antd";

const Input: React.FC<InputProps> = ({ label, placeholder, value }) => (
  <StyledInput>
    <div className="page">
      <div className="field field_v2">
        <label className="ha-screen-reader">{label}</label>
        <I2 className="field__input" placeholder={placeholder} value={value} />
        <span className="field__label-wrap" aria-hidden="true">
          <span className="field__label">{label}</span>
        </span>
      </div>
    </div>
  </StyledInput>
);

export default withTranslation()(Input);
