import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, Form, Row } from "antd";
import { useAppSelector } from "../../../app/hooks";
import Input from "../../../common/Input2";
import { authSelector } from "../../../slices/authSlice";
import { BackgroundContainer } from "../styles";

const ProfileView = () => {
  const user = useAppSelector(authSelector).user;

  const onFinish = (values: any) => {
    console.log(values);
  };

  return <BackgroundContainer>fda</BackgroundContainer>;
};

export default ProfileView;
