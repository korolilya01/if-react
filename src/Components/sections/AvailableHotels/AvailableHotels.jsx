import React from 'react';

import styles from './AvailableHotels.module.scss';

import { Container } from '../../Container';
import { List } from '../../List';
import { SwiperButton } from '../../SwiperButton';
import { SwiperContainer } from '../../SwiperContainer';
import { Title } from '../../Title';

import classNames from 'classnames';
import { useAvailableHotelsContext } from './AvailableHotels.context';

export const AvailableHotels = () => {
  const { cards } = useAvailableHotelsContext();
  if (!cards || cards.length === 0) {
    return null;
  }
  return (
    <section className={styles.section}>
      <Container>
        <Title content="Available hotels" />
        <SwiperContainer>
          <List
            className={classNames('homes__list', 'swiper-wrapper')}
            array={cards}
          >
            {cards.length > 4 && <SwiperButton className={styles.circle} />}
          </List>
        </SwiperContainer>
      </Container>
    </section>
  );
};
