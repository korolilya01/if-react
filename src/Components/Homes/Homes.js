import React from 'react';

import classNames from 'classnames';

import './Homes.css';
import { Arrow } from '../SwiperButton/Arrow';
import { Container } from '../Container';
import { Hotels } from '../Hotels';
import { List } from '../List';
import { SwiperButton } from '../SwiperButton';
import { SwiperContainer } from '../SwiperContainer';
import { Title } from '../Title';

export const Homes = () => (
  <section className="homes">
    <Container>
      <Title content="Homes guests loves" />
      <SwiperContainer>
        <List className={classNames('homes__list', 'swiper-wrapper')}>
          <Hotels className="col-lg-3 col-md-6 col-sm-3" />
        </List>
        <SwiperButton className="circle">
          <Arrow />
        </SwiperButton>
      </SwiperContainer>
    </Container>
  </section>
);
