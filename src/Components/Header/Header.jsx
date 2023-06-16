import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';
import { Links } from '../Links';

import { authSelector } from '../../store/selectors/auth.selector';

import './Header.scss';

export const Header = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const showDropdown = () => {
    setIsVisible(!isVisible);
  };
  const isLogged = useSelector(authSelector);

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
              iconHref={isLogged ? '#account' : '#night-account'}
            />
            <Dropdown isVisible={isVisible} />
            <Icon className="menu" iconHref="#menu" />
          </div>
        </nav>
      </header>
    </>
  );
};
