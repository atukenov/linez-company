import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import Container from "../../common/Container";
import { registerUser } from "../../slices/authSlice";
import "./styles.css";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Admin = () => {
  const dispatch = useAppDispatch();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    dispatch(registerUser(values));
  };

  return (
    <Container isHeight={true}>
      <h1 className="pt-1">Add new user</h1>
      <Row justify="center" align="middle">
        <Col span={24}>
          <Form
            name="registerForm"
            {...formItemLayout}
            wrapperCol={{ span: 12 }}
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please enter valid email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="mobile"
              label="Mobile Phone"
              rules={[
                { required: true, message: "Please input valid phone number!" },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="repassword"
              label="Repeat Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
