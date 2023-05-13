import React from 'react';

import { Header } from './Header';
import { Main } from './Main';
import { AccountForm } from './AccountForm';

import './TopSection.scss';

export const TopSection = () => {
  return (
    <section className="main">
      <div className="container main-wrap">
        <Header />
        <Main />
        <AccountForm />
      </div>
    </section>
  );
};
