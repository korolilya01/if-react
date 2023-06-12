import React, { Suspense } from 'react';

import styles from './AvailableHotels.module.scss';

import { Container } from '../../Container';
import { List } from '../../List';
import { Loading } from '../../Loading';
import { SwiperButton } from '../../SwiperButton';
import { SwiperContainer } from '../../SwiperContainer';
import { Title } from '../../Title';

import classNames from 'classnames';
import { useAvailableHotelsContext } from './AvailableHotels.context';

export const AvailableHotels = () => {
  const { cards, scrollAvailableHotels } = useAvailableHotelsContext();
  if (!cards || cards.length === 0) {
    return null;
  }
  return (
    <section className={styles.section} ref={scrollAvailableHotels}>
      <Container>
        <Title content="Available hotels" />
        <SwiperContainer>
          <Suspense fallback={<Loading />}>
            <List
              className={classNames('homes__list', 'swiper-wrapper')}
              array={cards}
            >
              {cards.length > 4 && <SwiperButton className={styles.circle} />}
            </List>
          </Suspense>
        </SwiperContainer>
      </Container>
    </section>
  );
};
