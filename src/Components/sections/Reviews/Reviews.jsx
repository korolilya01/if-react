import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { ReviewsPage } from './ReviewsPage';
import { SwiperContainer } from '../../SwiperContainer';

import { data } from './Data';

import '../../../css/swiper-style.css';
import './Reviews.scss';

export const Reviews = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      //slidesPerView: 3,
      loop: true,
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        480: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      destroyOnUnmount: true,
    });
  }, []);
  return (
    <section className="reviews">
      <Container className="reviews-wrap">
        <Title className="reviews__title" content="Guests reviews" />
        <SwiperContainer className="swiper-reviews">
          <div className="list reviews__list swiper-wrapper">
            {data.map((item) => (
              <ReviewsPage key={item.id} {...item} />
            ))}
          </div>
          <div className="swiper-button-next circle swiper-button-next-dest">
            <div className="arrows"></div>
          </div>
          <div className="swiper-pagination"></div>
        </SwiperContainer>
      </Container>
    </section>
  );
};
