import React, { useEffect, useState } from "react";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const Motions = () => {
  return (
    <ScrollContainer key={"motion"}>
      <ScrollPage>
        <Animator animation={Fade()}>
          <img
            src="https://d.newsweek.com/en/full/1504436/th-sun.jpg"
            alt="sunny"
          />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={Fade()}>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616__340.jpg"
            alt="night"
          />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Motions;
