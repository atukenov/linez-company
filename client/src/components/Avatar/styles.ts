import styled from "styled-components";

export const LogOut = styled.div``;

export const ProfileAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #e2e2e2;
  color: black;
  font-weight: 800;
  letter-spacing: 1px;
  padding: 15px;
  border-radius: 50%;
  position: relative;
`;

export const Popover = styled.div`
  position: absolute;
  visibility: hidden;
  background-color: #1261a0;
  z-index: 2;
  margin-top: 18px;
  right: 40px;
  opacity: 0;
  transition: opacity 0.5s ease;

  &::before {
    position: absolute;
    content: "";
    top: -15px;
    right: 0px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;

    border-bottom: 15px solid #1261a0;
  }

  &.show {
    opacity: 1;
    visibility: visible;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 15px 25px;
  padding-right: 70px;
  padding-top: 5px;
  margin: 0;
`;
export const ListItem = styled.li`
  color: white;
  font-size: 18px;
  font-weight: 800;
  border-bottom: 1px solid white;
  margin-top: 15px;
  letter-spacing: 6px;

  a {
    color: white;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  letter-spacing: 6px;
  border: none;
  font-weight: 800;
  color: white;
  font-size: 18px;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;
