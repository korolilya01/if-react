import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { sliderBreakpoints } from './sliderBreakpoints';
import { ReviewsPage } from '../ReviewsPage';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../Reviews.scss';

export const Slider = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={16}
      slidesPerView={3}
      navigation
      pagination
      breakpoints={sliderBreakpoints}
      loop
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <ReviewsPage {...item} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};
