import React from 'react';

import './Homes.css';
import { Container } from '../Container';
import { Hotels } from '../Hotels';
import { SwiperButton } from '../SwiperButton';
import { SwiperContainer } from '../SwiperContainer';
import { Title } from '../Title';

export const Homes = () => (
  <section className="homes">
    <Container>
      <Title content="Homes guests loves" />
      <SwiperContainer>
        <div className="list homes__list swiper-wrapper">
          <Hotels className="col-lg-3 col-md-6 col-sm-3" />
        </div>
        <SwiperButton className="circle" />
      </SwiperContainer>
    </Container>
  </section>
);
