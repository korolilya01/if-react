import React, { Suspense } from 'react';

import styles from './AvailableHotels.module.scss';

import { Container } from '../../Container';
import { List } from '../../List';
import { Loading } from '../../Loading';
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
        <Suspense fallback={<Loading />}>
          <List className={classNames('homes__list')} array={cards} />
        </Suspense>
      </Container>
    </section>
  );
};
