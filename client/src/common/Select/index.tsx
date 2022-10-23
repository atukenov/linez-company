import React, { ChangeEvent, useEffect, useState } from "react";
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

  const toggle = (e: any) => {
    setIsOpen((prev) => !prev);
  };

  const onOptionClick = (value: string) => (e: any) => {
    setSelected(value);
    let newEvent = {
      target: {
        value: value,
      },
    } as ChangeEvent<HTMLInputElement>;
    if (props.onChange) props.onChange(newEvent);
    setIsOpen((prev) => !prev);
  };

  const filterList = (e: any) => {
    console.log(e.target.value);
  };

  const options = ["Atyrau", "Astana", "Almaty", "Aktobe", "Aktau"];

  return (
    <Container>
      <>
        <div style={{ position: "relative" }} onClick={toggle}>
          <StyledInput
            {...props}
            id={props.name}
            onChange={filterList}
            value={selected}
          />
          <span className="focus-border" />
        </div>

        {!isOpen && props.validate?.touched && props.validate?.errors ? (
          <div style={{ minHeight: "22px", zIndex: "-1" }}>
            <Fade>
              <span style={{ color: "darkred" }}>{props.validate.errors}</span>
            </Fade>
          </div>
        ) : null}

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
      </>
    </Container>
  );
};

export default Select;
