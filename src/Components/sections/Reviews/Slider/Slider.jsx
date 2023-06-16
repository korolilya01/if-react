import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { ReviewsPage } from '../ReviewsPage';

import 'swiper/css';
import 'swiper/css/navigation';

import '../Reviews.scss';

export const Slider = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={16}
      slidesPerView={3}
      navigation
      pagination
      breakpoints={{
        0: { slidesPerView: 1 },
        480: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      loop={true}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <ReviewsPage {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
