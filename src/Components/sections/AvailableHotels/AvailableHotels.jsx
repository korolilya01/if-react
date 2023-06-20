import React from 'react';

import { useAvailableHotelsScrollContext } from './AvailableHotels.context';

import { useSelector } from 'react-redux';
import { availableSelector } from '../../../store/selectors/available.selector';

import { Container } from '../../Container';
import { List } from '../../List';
import { Title } from '../../Title';

import { useHomesStyles } from '../Homes/Homes.styles';

export const AvailableHotels = () => {
  const classes = useHomesStyles();
  const scrollAvailableHotels = useAvailableHotelsScrollContext();

  const hotelsArray = useSelector(availableSelector);

  return !hotelsArray || !hotelsArray.length ? null : (
    <section className={classes.root} ref={scrollAvailableHotels}>
      <Container>
        <Title content="Available hotels" />
        <List className={classes.list} array={hotelsArray} />
      </Container>
    </section>
  );
};
