import React from 'react';

import { useAvailableHotelsScrollContext } from './AvailableHotels.context';

import { useSelector } from 'react-redux';
import { availableSelector } from '../../../store/selectors/available.selector';

import { Container } from '../../Container';
import { List } from '../../List';
import { Title } from '../../Title';

import { styles } from '../Homes/Homes.styles';

export const AvailableHotels = () => {
  const classes = styles();
  const scrollAvailableHotels = useAvailableHotelsScrollContext();

  const hotelsArray = useSelector(availableSelector);

  return hotelsArray.length ? (
    <section className={classes.root} ref={scrollAvailableHotels}>
      <Container>
        <Title content="Available hotels" />
        <List className={classes.list} array={hotelsArray} />
      </Container>
    </section>
  ) : hotelsArray.length === 0 ? (
    <section className={classes.root} ref={scrollAvailableHotels}>
      <Container>
        <Title content="Available hotels" />
        <p>
          Sorry, either you mistyped the request or we deleted these items,{' '}
          <br /> but let is agree to blame this on you :(
        </p>
      </Container>
    </section>
  ) : null;
};
