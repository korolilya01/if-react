import React from 'react';

import { Hotels } from '../Hotels';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { listBreakpoints } from './data';

import classNames from 'classnames';
import { styles } from './List.styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const List = ({ className, array, children }) => {
  const classes = styles();

  const slidesPerView = array.length > 4 ? 4 : array.length;

  return (
    <div className={classNames(classes.root, className)}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={8}
        slidesPerView={slidesPerView}
        pagination
        navigation
        breakpoints={listBreakpoints}
        loop
      >
        {array.map((item) => (
          <SwiperSlide key={item.id}>
            <Hotels {...item} />
          </SwiperSlide>
        ))}
        {children}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};
