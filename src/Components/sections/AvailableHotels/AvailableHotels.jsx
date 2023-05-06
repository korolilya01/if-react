import React, { useState } from 'react';

import styles from './AvailableHotels.module.scss';

import { Container } from '../../Container';
import { List } from '../../List';
import { SwiperButton } from '../../SwiperButton';
import { SwiperContainer } from '../../SwiperContainer';
import { Title } from '../../Title';

import classNames from 'classnames';
import { useAvailableHotelsContext } from './AvailableHotels.context';

// eslint-disable-next-line react/prop-types
export const AvailableHotels = () => {
  const { cards } = useAvailableHotelsContext();
  const [swiperButton, setSwiperButton] = useState('block');
  if (cards.length === 0) {
    return null;
  }
  return (
    <section className={styles.section}>
      <Container>
        <Title content="Available hotels" />
        <SwiperContainer>
          <List
            setSwiperButton={setSwiperButton}
            className={classNames('homes__list', 'swiper-wrapper')}
            array={cards}
          />
          <SwiperButton
            swiperButton={{ display: swiperButton }}
            className={styles.circle}
          />
        </SwiperContainer>
      </Container>
    </section>
  );
};
