import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Input2 from "../Input2";
import { InputProps } from "../types";
import {
  Container,
  List,
  ListContainer,
  ListItem,
  StyledInput,
} from "./styles";

const Select: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Please select");
  const [event, setEvent] = useState<any>();

  const toggle = (e: any) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const onOptionClick = (value: string) => (e: any) => {
    setSelected(value);
    setIsOpen((prev) => !prev);
    let newEvent = e;
    newEvent.target.value = value;
    newEvent.id = props.name;
    console.log(newEvent);
    if (props.onChange) props.onChange(newEvent);
  };

  const options = ["Atyrau", "Astana", "Almaty", "Aktobe", "Aktau"];

  return (
    <Container>
      <>
        <div style={{ position: "relative" }} onClick={toggle}>
          <StyledInput {...props} id={props.name} value={selected} />
          <span className="focus-border" />
        </div>
        {isOpen && (
          <ListContainer>
            <List>
              {options.map((option) => (
                <ListItem onClick={onOptionClick(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </List>
          </ListContainer>
        )}
        <div style={{ minHeight: "22px", zIndex: "-1" }}>
          {props.validate?.touched && props.validate?.errors ? (
            <Fade>
              <span style={{ color: "darkred" }}>{props.validate.errors}</span>
            </Fade>
          ) : null}
        </div>
      </>
    </Container>
  );
};

export default Select;
