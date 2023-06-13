import React from 'react';

import { Hotels } from '../Hotels';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { listBreakpoints } from './data';

import classNames from 'classnames';

import styles from './List.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

export const List = ({ className, array, children }) => (
  <div className={classNames(styles.list, className)}>
    <Swiper
      modules={[Navigation]}
      spaceBetween={8}
      slidesPerView={4}
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
    </Swiper>
  </div>
);
