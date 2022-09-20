import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import React from "react";

const ProfileView = () => {
  return (
    <Row justify="center" align="middle">
      <Col lg={6}></Col>
      <Col className="center" xs={24} md={12} lg={5} style={{ marginTop: 50 }}>
        <Avatar
          size={256}
          style={{ boxShadow: "1px 10px 20px 1px #000" }}
          icon={<UserOutlined />}
        />
      </Col>
      <Col className="center" xs={24} md={12} lg={7}>
        <p>Almaz Tukenov</p>
      </Col>
      <Col lg={6}></Col>
    </Row>
  );
};

export default ProfileView;
