import React from 'react';

import classNames from 'classnames';

import './Homes.css';
import { Container } from '../Container';
import { List } from '../List';
import { SwiperButton } from '../SwiperButton';
import { SwiperContainer } from '../SwiperContainer';
import { Title } from '../Title';

import { HOTEL_DATA } from '../Hotels/data';

// eslint-disable-next-line react/prop-types
export const Homes = () => {
  return (
    <section className="homes">
      <Container>
        <Title content="Homes guests loves" />
        <SwiperContainer>
          <List
            className={classNames('homes__list', 'swiper-wrapper')}
            array={HOTEL_DATA}
          />
          <SwiperButton className="circle" />
        </SwiperContainer>
      </Container>
    </section>
  );
};
