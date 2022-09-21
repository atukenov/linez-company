import { withTranslation } from "react-i18next";
import { StyledInput } from "./styles";
import { InputProps } from "../types";
import { Form, FormItemProps, Input as I2 } from "antd";

const Input: React.FC<FormItemProps> = (props) => (
  <StyledInput>
    <Form.Item name={props.name}>
      <div className="field field_v2">
        <label className="ha-screen-reader">Last name</label>
        <I2 className="field__input" />
        <span className="field__label-wrap" aria-hidden="true">
          <span className="field__label">Last name</span>
        </span>
      </div>
    </Form.Item>
  </StyledInput>
);

export default withTranslation()(Input);
