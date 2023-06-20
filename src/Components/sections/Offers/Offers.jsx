import React from 'react';

import { Container } from '../../Container';
import { OffersPage } from './OffersPage';
import { Title } from '../../Title';

import { data } from './Data';

import { useOffersStyles } from './Offers.styles';
import classNames from 'classnames';

export const Offers = () => {
  const classes = useOffersStyles();

  return (
    <section>
      <Container>
        <Title className={classes.title} content="What do we offer" />
        <div className={classNames('list', classes.list)}>
          {data.map((item) => (
            <OffersPage key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
