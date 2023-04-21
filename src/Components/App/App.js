import React from 'react';
import React, { useState } from 'react';

import { Homes } from '../Homes';
import { TopSectionForm } from '../TopSection';
import { AvailableHotels } from '../AvailableHotels';

export function App() {
  const [availableHotels, setAvailableHotels] = useState([]);
  const [visibleHotels, setVisibleHotels] = useState('none');

  return (
    <>
      <section className="main">
        <div className="container main-wrap">
          <input id="radio-but__acc" type="radio" className="radio-but__acc" />
          <header className="header">
            <a href="..">
              <svg className="icon-logo">
                <use href="#trip_house" />
              </svg>
            </a>
            <nav className="header__offers">
              <div className="header__links">
                <a className="links" href="#">
                  Stays
                </a>
                <a className="links" href="#">
                  Attractions
                </a>
              </div>
              <div className="header__items">
                <svg className="icon-night">
                  <use href="#night" />
                </svg>
                <label htmlFor="radio-but__acc">
                  <svg className="icon-account">
                    <use href="#account" />
                  </svg>
                </label>
                <svg className="icon-menu">
                  <use href="#menu" />
                </svg>
              </div>
            </nav>
          </header>
          <main className="page">
            <h1 className="page__title">
              Discover stays <br />
              to live, work or just relax
            </h1>
            <TopSectionForm
              setAvailableHotels={setAvailableHotels}
              setVisibleHotels={setVisibleHotels}
            />
            <div className="page__apps">
              <a href="#">
                <svg className="icon-google_play">
                  <use href="#google_play" />
                </svg>
              </a>
              <a href="#">
                <svg className="icon-app_store">
                  <use href="#app_store" />
                </svg>
              </a>
            </div>
          </main>
          <form action="#" className="account account-block">
            <p className="account__title">Sign in</p>
            <label htmlFor="email" className="account__email-text">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="account__email-field"
            />
            <label htmlFor="password" className="account__password-text">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="account__password-field"
            />
            <button
              type="submit"
              className="account__button"
              name="account__button"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>
      <AvailableHotels
        availableHotels={availableHotels}
        visibleHotels={{ display: visibleHotels }}
      />
      <Homes />
    </>
  );
}
