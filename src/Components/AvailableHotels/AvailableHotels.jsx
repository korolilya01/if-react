import React, { useState } from 'react';

import styles from './AvailableHotels.module.scss';

import { Container } from '../Container';
//import { Hotels } from '../Hotels';
import { SwiperButton } from '../SwiperButton';
import { SwiperContainer } from '../SwiperContainer';
import { Title } from '../Title';
import classNames from 'classnames';
import { List } from '../List';

// eslint-disable-next-line react/prop-types
export const AvailableHotels = ({ availableHotels, visibleHotels }) => {
  const [swiperButton, setSwiperButton] = useState('block');
  return (
    <section className={styles.section} style={visibleHotels}>
      <Container>
        <Title content="Available hotels" />
        <SwiperContainer>
          <List
            setSwiperButton={setSwiperButton}
            className={classNames('homes__list', 'swiper-wrapper')}
            array={availableHotels}
          />
          <SwiperButton
            swiperButton={{ display: swiperButton }}
            className="circle"
          />
        </SwiperContainer>
      </Container>
    </section>
  );
};
