import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { authSelector } from "../../../slices/authSlice";

const ProfileView = () => {
  const user = useAppSelector(authSelector).user;
  return (
    <Row justify="center" align="middle">
      <Col xxl={6}></Col>
      <Col
        className="center"
        xs={24}
        md={12}
        lg={12}
        xl={12}
        xxl={5}
        style={{ marginTop: 50 }}
      >
        <Avatar
          size={{ xs: 220, sm: 220, md: 220, lg: 220, xl: 200, xxl: 264 }}
          style={{ boxShadow: "1px 10px 20px 1px #000" }}
          icon={<UserOutlined />}
        />
      </Col>
      <Col className="" xs={24} md={12} lg={12} xl={12} xxl={7}>
        <div style={{ marginTop: 25 }}>
          <div className="center">
            <h1>{user?.name}</h1>
            <h3>Welcome back!</h3>
          </div>
          <div className="center">
            <ul style={{ display: "inline-block", textAlign: "left" }}>
              <li>🧀 based in atyrau</li>
              <li>💻 software developer</li>
              <li>🐈 traveller</li>
              <li>✉️ let's get in touch</li>
            </ul>
          </div>

          <div className="center" style={{ fontSize: 30 }}>
            <a
              target="_blank"
              aria-label="Github"
              rel="noopener noreferrer"
              href="https://github.com/atukenov"
              style={{ marginRight: 10 }}
            >
              <GithubOutlined />
            </a>
            <a
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/atukenov"
              style={{ marginRight: 10 }}
            >
              <LinkedinOutlined />
            </a>
            <a
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
              href="https://twitter.com/atukenov"
              style={{ marginRight: 10 }}
            >
              <TwitterOutlined />
            </a>
            <a
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
              href="https://instagram.com/amakenzi_"
            >
              <InstagramOutlined />
            </a>
          </div>
        </div>
      </Col>
      <Col xxl={6}></Col>
    </Row>
  );
};

export default ProfileView;
