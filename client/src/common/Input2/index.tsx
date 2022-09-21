import { withTranslation } from "react-i18next";
import { StyledInput } from "./styles";
import { FormInputProps } from "../types";
import { Form, Input as I2 } from "antd";

const Input: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  rules,
}) => (
  <StyledInput>
    <Form.Item name={name} rules={rules}>
      <div className="page">
        <div className="field field_v2">
          <label className="ha-screen-reader">{label}</label>
          <I2 className="field__input" placeholder={placeholder} />
          <span className="field__label-wrap" aria-hidden="true">
            <span className="field__label">{label}</span>
          </span>
        </div>
      </div>
    </Form.Item>
  </StyledInput>
);

export default withTranslation()(Input);
