import React from 'react';

import { Links } from '../Links';

import './Header.scss';
import { Icon } from '../../Icon';

export const Header = () => (
  <>
    <input id="radio-but__acc" type="radio" className="radio-but__acc" />
    <header className="header">
      <Icon className="logo" iconHref="#trip_house" />
      <nav className="header__offers">
        <div className="header__links">
          <Links content="Stays" />
          <Links content="Attractions" />
        </div>
        <div className="header__items">
          <Icon className="night" iconHref="#night" />
          <label htmlFor="radio-but__acc">
            <Icon className="accountIcon" iconHref="#account" />
          </label>
          <Icon className="menu" iconHref="#menu" />
        </div>
      </nav>
    </header>
  </>
);
