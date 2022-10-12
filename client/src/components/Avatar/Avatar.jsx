import React, { useState } from "react";
import { LogOut, ProfileAvatar, Popover, List, ListItem } from "./styles";

const Avatar = () => {
  const [show, setShow] = useState(false);

  const handlePopover = () => {
    setShow((prev) => !prev);
  };

  return (
    <LogOut onClick={handlePopover}>
      <ProfileAvatar>AT</ProfileAvatar>
      <Popover className={show ? "show" : ""}>
        <List>
          <ListItem>Profile</ListItem>
          <ListItem>Settings</ListItem>
          <ListItem>Log Out</ListItem>
        </List>
      </Popover>
    </LogOut>
  );
};

export default Avatar;
