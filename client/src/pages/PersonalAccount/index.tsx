import { Button, Col, Layout, Menu, Row } from "antd";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  SettingOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { StyledContainer } from "./styles";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector, logout } from "../../slices/authSlice";
import SiteTheme from "../../common/SiteTheme";

const { Header, Content, Footer } = Layout;

const adminMenu = {
  label: "Admin Menu",
  key: "adminMenu",
  icon: <SettingOutlined />,
  children: [
    {
      label: <NavLink to="admin/user">Users</NavLink>,
      key: "allUsers",
      icon: <UserOutlined />,
    },
    {
      label: <NavLink to="admin/site">Settings</NavLink>,
      key: "siteSettings",
      icon: <SettingOutlined />,
    },
  ],
};

const userMenu = {
  label: "My Projects",
  key: "myProjects",
  icon: <AppstoreOutlined />,
  children: [
    {
      label: <NavLink to="logo">My Logos</NavLink>,
      key: "logo",
      icon: <UserOutlined />,
    },
    {
      label: <NavLink to="interior">My Interiors</NavLink>,
      key: "interior",
      icon: <UploadOutlined />,
    },
  ],
};

const PersonalAccount = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(authSelector);
  const roles = auth.user?.roles;
  const isAuth = auth.isAuth;
  const [current, setCurrent] = useState("adminMenu");

  const menuItems = roles?.find((role) => role === "admin")
    ? [adminMenu, userMenu]
    : [userMenu];

  const onClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <SiteTheme
      logo="transperent"
      sider="#100F0F"
      content="#505050"
      footer="#505050"
      header="#100F0F"
    >
      <StyledContainer>
        <Layout style={{ minHeight: "100vh", height: "100%" }}>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            >
              <Row
                justify="center"
                style={{ height: "inherit" }}
                align="middle"
              >
                <Col span={4}>
                  <div className="logo">LineZ</div>
                </Col>
                <Col span={16}>
                  <Menu
                    triggerSubMenuAction="click"
                    mode="horizontal"
                    items={menuItems}
                    selectedKeys={[current]}
                    onClick={onClick}
                  />
                </Col>
                <Col span={4}>
                  {isAuth && (
                    <>
                      <Link to="profile">
                        <strong style={{ color: "white" }}>
                          {auth.user?.name}
                        </strong>
                      </Link>
                      <Button
                        type="link"
                        onClick={() => {
                          dispatch(logout());
                          window.location.reload();
                        }}
                      >
                        Log Out
                      </Button>
                    </>
                  )}
                </Col>
              </Row>
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              {/* <Breadcrump /> */}
              <div
                className="site-layout-background"
                style={{ padding: "25px 24px", minHeight: 360, height: "100%" }}
              >
                <Outlet />
              </div>
            </Content>
            <Footer>
              <Row>
                <Col span={24} style={{ textAlign: "center" }}>
                  LineZ ©2022 Created with{" "}
                  <span style={{ color: "red" }}>❤</span> by SKAT
                </Col>
              </Row>
            </Footer>
          </Layout>
        </Layout>
      </StyledContainer>
    </SiteTheme>
  );
};

export default PersonalAccount;
