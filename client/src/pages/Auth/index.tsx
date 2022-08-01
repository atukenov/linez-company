import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React from "react";

import { useAppDispatch } from "../../app/hooks";
import { loginUser } from "../../features/auth/authSlice";

import Container from "../../common/Container";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./styles";

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(loginUser(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container isHeight={true}>
      <Row justify="center" align="middle" style={{ height: "inherit" }}>
        <Col span={24}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
