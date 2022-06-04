import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./styles.css";

const Slideshow = ({ data }: any) => {
  return (
    <Carousel autoPlay dynamicHeight={false} infiniteLoop={true}>
      {data.svg.map((item: any, id: number) => {
        return (
          <div key={id}>
            <img src={`/img/svg/${item}`} alt={`${id + 1}`} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slideshow;
