import {
  AppstoreOutlined,
  EditOutlined,
  FormatPainterOutlined,
  MenuOutlined,
  SettingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import {
  Container,
  Header,
  Logo,
  LogOut,
  Sider,
  Avatar,
  Content,
  SiderMenu,
  CloseIcon,
  CustomCloseIcon,
  BurgerContainer,
  BurgerBar,
  Left,
} from "./styles";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Admin",
    key: "admin",
    icon: <MenuOutlined />,
    children: [
      {
        label: "Users",
        key: "users",
        icon: <UserSwitchOutlined />,
      },
      {
        label: "Settings",
        key: "settings",
        icon: <SettingOutlined />,
      },
    ],
  },
  {
    label: "My Projects",
    key: "myprojects",
    icon: <AppstoreOutlined />,
    children: [
      {
        label: "Logo",
        key: "logo",
        icon: <EditOutlined />,
      },
      {
        label: "Interior",
        key: "interior",
        icon: <FormatPainterOutlined />,
      },
    ],
  },
];

const PersonalAccount = () => {
  const [hidden, setHidden] = useState(true);

  const handleSlider = () => {
    setHidden((prev) => !prev);
  };

  return (
    <Container>
      <Header>
        <Left>
          <BurgerContainer onClick={handleSlider}>
            <BurgerBar />
            <BurgerBar />
            <BurgerBar />
          </BurgerContainer>
          <Sider>
            <Menu className="sider-menu-items" mode="inline" items={items} />
          </Sider>
        </Left>

        <Logo>LineZ</Logo>
        <LogOut>
          <Avatar>AT</Avatar>
        </LogOut>
      </Header>

      <Content></Content>
    </Container>
  );
};

export default PersonalAccount;
