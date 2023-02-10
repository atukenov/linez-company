import React from "react";
import Background from "../../components/Landing/Background";
import Body from "../../components/Landing/Body";
import Header from "../../components/Landing/Header";

const Landing = () => {
  return (
    <>
      <Background>
        <Header />
        <Body />
      </Background>
    </>
  );
};

export default Landing;
