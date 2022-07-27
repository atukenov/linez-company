import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper";

interface SlideshowProps {
  data: any;
  onClick: (item: any) => void;
}

const Slideshow = ({ data, onClick }: SlideshowProps) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        loopedSlides={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((item: any, id: number) => {
          return (
            <SwiperSlide key={id} onClick={() => onClick(item)}>
              <img src={`/img/svg/${item.main}`} alt={`${id}`} />
              {/* <img src="https://source.unsplash.com/random" alt="random" /> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slideshow;
