import React, { Suspense } from 'react';

import { useAvailableHotelsScrollContext } from './AvailableHotels.context';

import { useSelector } from 'react-redux';
import { availableSelector } from '../../../store/selectors/available.selector';

import { Container } from '../../Container';
import { List } from '../../List';
import { Loading } from '../../Loading';
import { Title } from '../../Title';

import classNames from 'classnames';

import styles from './AvailableHotels.module.scss';

export const AvailableHotels = () => {
  const scrollAvailableHotels = useAvailableHotelsScrollContext();
  const hotelsArray = useSelector(availableSelector);
  if (hotelsArray.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} ref={scrollAvailableHotels}>
      <Container>
        <Title content="Available hotels" />
        <Suspense fallback={<Loading />}>
          <List className={classNames('homes__list')} array={hotelsArray} />
        </Suspense>
      </Container>
    </section>
  );
};
