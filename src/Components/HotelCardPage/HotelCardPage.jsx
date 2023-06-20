import React from 'react';

import { Container } from '../Container';
import { Header } from '../Header';
import { Sprites } from '../Sprites';
import { Footer } from '../Footer';

import { ScrollRestoration, useLocation } from 'react-router-dom';

import { useCardStyles } from './HotelCardPage.styles';

export const HotelCardPage = () => {
  const classes = useCardStyles();

  const location = useLocation();
  const { state } = location;

  return (
    <>
      <ScrollRestoration />
      <div className={classes.page}>
        <Container>
          <Sprites />
          <Header />
          <div className={classes.content}>
            <img
              src={state.imageUrl}
              alt={state.name}
              className={classes.img}
            />
            <p className={classes.text}>{state.name}</p>
            <p className={classes.text}>{`${state.city}, ${state.country}`}</p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};
