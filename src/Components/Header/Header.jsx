import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from '../Icon';
import { Dropdown } from '../Dropdown';
import { Links } from '../Links';

import './Header.scss';

export const Header = ({ authorize, setAuthorize }) => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const showDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <header className="header">
        <Icon
          onClick={() => navigate('/')}
          className="logo"
          iconHref="#trip_house"
        />
        <nav className="header__offers">
          <div className="header__links">
            <Links content="Stays" className="header__link" />
            <Links content="Attractions" className="header__link" />
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
