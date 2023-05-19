import React, { useMemo } from 'react';

import styles from './AvailableHotels.module.scss';

import { Container } from '../../Container';
import { List } from '../../List';
import { SwiperButton } from '../../SwiperButton';
import { SwiperContainer } from '../../SwiperContainer';
import { Title } from '../../Title';

import classNames from 'classnames';

export const AvailableHotels = ({ availableHotels, visibleHotels }) => {
  const swiperButton = useMemo(
    () => (availableHotels.length > 4 ? 'block' : 'none'),
    [availableHotels],
  );
  return (
    <section className={styles.section} style={visibleHotels}>
      <Container>
        <Title content="Available hotels" />
        <SwiperContainer>
          <List
            className={classNames('homes__list', 'swiper-wrapper')}
            array={availableHotels}
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
