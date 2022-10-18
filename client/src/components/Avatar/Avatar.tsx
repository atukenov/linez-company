import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import OverlayTrigger from "../../common/OverlayTrigger";
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
      <OverlayTrigger isOpen={show} handleClose={handlePopover}>
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
      </OverlayTrigger>
    </LogOut>
  );
};

export default Avatar;
