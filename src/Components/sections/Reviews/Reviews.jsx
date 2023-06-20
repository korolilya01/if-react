import React from 'react';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { Slider } from './Slider';

import { data } from './Data';

import { useReviewsStyles } from './Reviews.styles';
import classNames from 'classnames';

export const Reviews = () => {
  const classes = useReviewsStyles();

  return (
    <section className={classes.root}>
      <Container>
        <Title content="Guests reviews" />
        <div className={classNames('list', classes.list)}>
          <Slider data={data} />
        </div>
      </Container>
    </section>
  );
};
