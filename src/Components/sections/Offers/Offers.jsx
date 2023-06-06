import React from 'react';
import { Container } from '../../Container';
import { Title } from '../../Title';

import { data } from './Data';

import { OffersPage } from './OffersPage';
import './Offers.scss';

export const Offers = () => {
  return (
    <section className="offers">
      <Container>
        <Title content="What do we offer" />
        <div className="list offers__list">
          {data.map((item) => (
            <OffersPage key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
