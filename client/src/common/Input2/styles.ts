import styled from "styled-components";

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
