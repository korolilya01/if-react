import React from 'react';
import { Hotels } from '../Hotels';
import classNames from 'classnames';

import styles from './List.module.scss';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export const List = ({ className, array, children }) => {
  return (
    <div className={classNames(styles.list, className)}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={4}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        loop={true}
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
};
