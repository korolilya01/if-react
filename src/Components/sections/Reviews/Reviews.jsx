import React from 'react';

import { Container } from '../../Container';
import { Title } from '../../Title';

import { data } from './Data';

import '../../../css/swiper-style.css';
import './Reviews.scss';
import { Slider } from './Slider';

export const Reviews = () => {
  return (
    <section className="reviews">
      <Container>
        <Title className="reviews__title" content="Guests reviews" />
        <div className="list reviews__list">
          <Slider data={data} />
        </div>
      </Container>
    </section>
  );
};
