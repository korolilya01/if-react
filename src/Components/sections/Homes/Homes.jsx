import React, { useEffect, useState } from 'react';

import { Container } from '../../Container';
import { List } from '../../List';
import { Title } from '../../Title';

import { getHomesHotels } from '../../../services/index';

import { styles } from './Homes.styles';

export const Homes = () => {
  const classes = styles();

  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    getHomesHotels().then((hotels) => setHotel(hotels));
  }, []);

  return (
    <section className={classes.root}>
      <Container>
        <Title content="Homes guests loves" />
        <List className={classes.list} array={hotel} />
      </Container>
    </section>
  );
};
