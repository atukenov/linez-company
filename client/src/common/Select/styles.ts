import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;
export const StyledInput = styled.input`
  background-color: white;
  border: 0;
  width: 100%;
  padding: 7px 0 7px 15px;
  border-bottom: 1px solid #000;

  ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: green;
    height: 3px;
    width: 0;
  }
  &:focus ~ .focus-border {
    width: 100%;
    transition: 0.6s;
  }
`;
export const ListContainer = styled.div`
  position: absolute;
  width: 100%;
  max-height: 100px;
  overflow: auto;
`;
export const List = styled.ul`
  padding: 0 15px;
  background-color: white;
  border: 1px solid black;
  &:first-child {
    padding-top: 0.8em;
  }
`;
export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  font-size: 14px;
`;
