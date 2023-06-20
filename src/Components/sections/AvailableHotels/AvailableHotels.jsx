import React from 'react';

import { useAvailableHotelsScrollContext } from './AvailableHotels.context';

import { useSelector } from 'react-redux';
import { availableSelector } from '../../../store/selectors/available.selector';

import { Container } from '../../Container';
import { List } from '../../List';
import { Title } from '../../Title';

import classNames from 'classnames';

import styles from './AvailableHotels.module.scss';

export const AvailableHotels = () => {
  const scrollAvailableHotels = useAvailableHotelsScrollContext();

  const hotelsArray = useSelector(availableSelector);

  return !hotelsArray || !hotelsArray.length ? null : (
    <section className={styles.section} ref={scrollAvailableHotels}>
      <Container>
        <Title content="Available hotels" />
        <List className={classNames('homes__list')} array={hotelsArray} />
      </Container>
    </section>
  );
};
