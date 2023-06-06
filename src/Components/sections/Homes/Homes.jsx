import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import './Homes.css';
import { Container } from '../../Container';
import { List } from '../../List';
import { Title } from '../../Title';

import { getHomesHotels } from '../../../services/index';

export const Homes = () => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    getHomesHotels().then((hotels) => setHotel(hotels));
  }, []);

  return (
    <>
      <section className="homes">
        <Container>
          <Title content="Homes guests loves" />
          <List className={classNames('homes__list')} array={hotel} />
        </Container>
      </section>
    </>
  );
};
