import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector, logout } from "../../slices/authSlice";
import {
  LogOut,
  ProfileAvatar,
  Popover,
  List,
  ListItem,
  Button,
} from "./styles";

const Avatar = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(authSelector);
  const isAuth = auth.isAuth;
  const [show, setShow] = useState(false);
  const handlePopover = () => {
    setShow((prev) => !prev);
  };

  return (
    <LogOut>
      <ProfileAvatar onClick={handlePopover}>AT</ProfileAvatar>
      <Popover className={show ? "show" : ""}>
        <List>
          <ListItem>
            <Link to="profile">Profile</Link>
          </ListItem>
          <ListItem>Settings</ListItem>
          <ListItem>
            <Button
              onClick={() => {
                dispatch(logout());
                window.location.reload();
              }}
            >
              Log Out
            </Button>
          </ListItem>
        </List>
      </Popover>
    </LogOut>
  );
};

export default Avatar;
