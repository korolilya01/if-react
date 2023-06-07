import React from 'react';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { Slider } from './Slider';

import { data } from './Data';

import '../../../css/swiper-style.scss';
import './Reviews.scss';

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
