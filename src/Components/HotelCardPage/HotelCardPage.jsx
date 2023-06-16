import React from 'react';

import { Container } from '../Container';
import { Header } from '../Header';
import { Sprites } from '../Sprites';
import { Footer } from '../Footer';

import { ScrollRestoration, useLocation } from 'react-router-dom';

import styles from './HotelCardPage.module.scss';

export const HotelCardPage = () => {

  const location = useLocation();
  const { state } = location;

  return (
    <>
      <ScrollRestoration />
      <div className={styles.page}>
        <Container>
          <Sprites />
          <Header />
          <div className={styles.content}>
            <img src={state.imageUrl} alt={state.name} className={styles.img} />
            <p className={styles.text}>{state.name}</p>
            <p className={styles.text}>{`${state.city}, ${state.country}`}</p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};
