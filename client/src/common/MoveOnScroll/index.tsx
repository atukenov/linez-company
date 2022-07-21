import React, { useEffect, useState } from 'react'
import { MoveOnScrollProps } from '../types';

const MoveOnScroll = (props: MoveOnScrollProps) => {
  const [offset, setOffset] = useState(0);
  const [style, setStyle] = useState();
  const [marginTop, setMarginTop] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [d, setD] = useState("left");

  useEffect(() => {
      const onScroll = () => {
        if (window.pageYOffset % 2 === 0)
          setD("l")
        if (window.pageYOffset % 3 === 0)
          setD("b");
        if (window.pageYOffset % 5 === 0)
          setD("r");
        if (d === "l")
          setMarginTop(window.pageYOffset);
        if (d === "r")
          setMarginTop(window.pageYOffset);
        if (d === "b")
          setMarginTop(window.pageYOffset);
      }
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, [d]);

  console.log(0); 
  return <div style={{position: "absolute", marginTop: marginTop, marginLeft: marginLeft, marginRight: marginRight }}>BLOCK</div>;
}

export default MoveOnScroll