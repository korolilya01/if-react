import React, { useState } from 'react';

import { Links } from '../Links';

import './Header.scss';
import { Icon } from '../../Icon';
import { Dropdown } from '../../Dropdown';

export const Header = ({ authorize, setAuthorize }) => {
  const [isVisible, setIsVisible] = useState(false);
  const showDropdown = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <header className="header">
        <Icon className="logo" iconHref="#trip_house" />
        <nav className="header__offers">
          <div className="header__links">
            <Links content="Stays" />
            <Links content="Attractions" />
          </div>
          <div className="header__items">
            <Icon className="night" iconHref="#night" />
            <Icon
              onClick={showDropdown}
              className="accountIcon"
              iconHref={authorize ? '#night-account' : '#account'}
            />
            <Dropdown isVisible={isVisible} setAuthorize={setAuthorize} />
            <Icon className="menu" iconHref="#menu" />
          </div>
        </nav>
      </header>
    </>
  );
};
