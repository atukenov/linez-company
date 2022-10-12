import {
  AppstoreOutlined,
  EditOutlined,
  FormatPainterOutlined,
  MenuOutlined,
  SettingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Avatar from "../../components/Avatar/Avatar";
import { authSelector } from "../../slices/authSlice";
import {
  Container,
  Header,
  Logo,
  Sider,
  Content,
  BurgerContainer,
  BurgerBar,
  Left,
  Wrapper,
  Footer,
  FooterContainer,
} from "./styles";

type MenuItem = Required<MenuProps>["items"][number];

const adminItems: MenuItem = {
  label: "Admin",
  key: "admin",
  icon: <MenuOutlined />,
  children: [
    {
      label: <NavLink to="admin/user">Users</NavLink>,
      key: "users",
      icon: <UserSwitchOutlined />,
    },
    {
      label: <NavLink to="admin/site">Settings</NavLink>,
      key: "settings",
      icon: <SettingOutlined />,
    },
  ],
};
const userItems: MenuItem = {
  label: "My Projects",
  key: "myprojects",
  icon: <AppstoreOutlined />,
  children: [
    {
      label: <NavLink to="logo">Logo</NavLink>,
      key: "logo",
      icon: <EditOutlined />,
    },
    {
      label: <NavLink to="interior">Interior</NavLink>,
      key: "interior",
      icon: <FormatPainterOutlined />,
    },
  ],
};
const PersonalAccount = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(authSelector);
  const roles = auth.user?.roles;
  const isAuth = auth.isAuth;
  const [hidden, setHidden] = useState(true);

  const items = roles?.find((role) => role === "admin")
    ? [adminItems, userItems]
    : [userItems];

  useEffect(() => {}, [hidden]);

  const handleSlider = () => {
    setHidden((prev) => !prev);
  };

  return (
    <Container>
      <Header>
        <Left>
          <BurgerContainer onClick={handleSlider}>
            <BurgerBar className={hidden ? "" : "active"} />
            <BurgerBar className={hidden ? "" : "active"} />
            <BurgerBar className={hidden ? "" : "active"} />
          </BurgerContainer>
        </Left>

        <Logo>SK Interior</Logo>
        <Avatar />
      </Header>

      <Content>
        <Sider className={hidden ? "inactive" : ""}>
          <Menu mode="inline" items={items} onClick={handleSlider} />
        </Sider>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Content>
      <FooterContainer>
        <Footer>
          SK Interior ©2022 Created with <span style={{ color: "red" }}>❤</span>{" "}
          by Husband
        </Footer>
      </FooterContainer>
    </Container>
  );
};

export default PersonalAccount;
