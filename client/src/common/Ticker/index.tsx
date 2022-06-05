import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./styles.css";

interface SlideshowProps {
  data: any;
  onClick: (item: any) => void;
}

const Slideshow = ({ data, onClick }: SlideshowProps) => {
  return (
    <Carousel
      autoPlay
      dynamicHeight={false}
      infiniteLoop={true}
      interval={6000}
      centerMode
      showThumbs={false}
      showIndicators={false}
      centerSlidePercentage={40}
    >
      {data.map((item: any, id: number) => {
        return (
          <div key={id} onClick={() => onClick(item)}>
            <img src={`/img/svg/${item.main}`} alt={`${id + 1}`} height={250} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slideshow;
