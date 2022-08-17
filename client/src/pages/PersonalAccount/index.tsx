import { Button, Layout, Menu, Row } from "antd";
import React, { useState } from "react";
import {
  SettingOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { StyledContainer } from "./styles";
import { NavLink, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector, logout } from "../../slices/authSlice";
import SiteTheme from "../../common/SiteSettings";

const { Header, Content, Footer, Sider } = Layout;

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
  icon: <SettingOutlined />,
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
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = roles?.find((role) => role === "admin")
    ? [adminMenu, userMenu]
    : [userMenu];

  return (
    <SiteTheme logo="red" sider="#100F0F" content="#E2DCC8" footer="#E2DCC8">
      <StyledContainer>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="logo" />
            {/* <Menu mode="inline">
              {roles?.find((role) => role === "admin") && adminMenu}
              {userMenu}
            </Menu> */}
            <Menu mode="inline" items={menuItems} />
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            >
              <Row justify="end" style={{ height: "inherit" }} align="middle">
                {isAuth && (
                  <>
                    <span>{auth.user?.name}</span>
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
              </Row>
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Outlet />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              LineZ ©2022 Created by SKAT
            </Footer>
          </Layout>
        </Layout>
      </StyledContainer>
    </SiteTheme>
  );
};

export default PersonalAccount;
