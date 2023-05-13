import React from 'react';

import { Header } from './Header';
import { Main } from './Main';
import { AccountForm } from './AccountForm';

import './TopSection.scss';

export const TopSection = ({ setAvailableHotels, setVisibleHotels }) => {
  return (
    <section className="main">
      <div className="container main-wrap">
        <Header />
        <Main
          setAvailableHotels={setAvailableHotels}
          setVisibleHotels={setVisibleHotels}
        />
        <AccountForm />
      </div>
    </section>
  );
};
