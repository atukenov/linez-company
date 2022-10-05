import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginUser } from "../../slices/authSlice";

import Container from "../../common/Container";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./styles.css";
import { alertSelector } from "../../slices/alertSlice";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(alertSelector).alertType;
  const navigate = useNavigate();
  const remember = localStorage.getItem("remember");

  useEffect(() => {
    if (status === "success") navigate("/myaccount", { replace: true });
  }, [status, navigate]);

  const onFinish = (values: any) => {
    if (values.remember) localStorage.setItem("remember", values.email);
    dispatch(loginUser(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container isHeight={true}>
      <Row
        justify="center"
        align="middle"
        style={{ height: "100%", minHeight: "100vh" }}
      >
        <Col span={24}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: remember ? true : false,
              email: remember ? remember : "",
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
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
              <Row justify="space-between">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="###">
                  Forgot password
                </a>
              </Row>
            </Form.Item>
            <Form.Item>
              <Row justify="center">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Row>
            </Form.Item>
            <Row justify="center">Or</Row>
            <Form.Item>
              <Row justify="center">
                <a href="###">register now!</a>
              </Row>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
