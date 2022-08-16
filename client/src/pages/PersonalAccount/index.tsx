import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  SettingOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { StyledContainer } from "./styles";
import { NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { authSelector } from "../../slices/authSlice";

const { Header, Content, Footer, Sider } = Layout;

const adminMenu = (
  <Menu.SubMenu key="AdminMenu" title="Admin Menu" icon={<SettingOutlined />}>
    <Menu.Item key="AllUsers" icon={<UserOutlined />}>
      <NavLink to="admin/user">Users</NavLink>
    </Menu.Item>
    <Menu.Item key="AllLogos" icon={<UserOutlined />}>
      <NavLink to="admin/logo">Logos</NavLink>
    </Menu.Item>
  </Menu.SubMenu>
);
const userMenu = (
  <Menu.SubMenu key="MyProjects" title="My Projects" icon={<SettingOutlined />}>
    <Menu.Item key="Logo" icon={<UserOutlined />}>
      <NavLink to="/logo">My Logo</NavLink>
    </Menu.Item>
    <Menu.Item key="Projects" icon={<UploadOutlined />}>
      <NavLink to="/interior">My Interior</NavLink>
    </Menu.Item>
  </Menu.SubMenu>
);

const PersonalAccount = () => {
  const roles = useAppSelector(authSelector).user?.roles;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <StyledContainer>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu mode="inline">
            {roles?.find((role) => role === "admin") && adminMenu}
            {userMenu}
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
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
  );
};

export default PersonalAccount;
