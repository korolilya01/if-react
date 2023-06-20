import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';
import { Links } from '../Links';

import { authSelector } from '../../store/selectors/auth.selector';

import { useHeaderStyles } from './Header.styles';
import { useHeaderSvgStyles } from './HeaderSvg.styles';

import { toggleTheme } from '../../store/slices/theme.slice';

export const Header = () => {
  const classes = useHeaderStyles();
  const svg = useHeaderSvgStyles();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const showDropdown = () => {
    setIsVisible(!isVisible);
  };
  const isLogged = useSelector(authSelector);

  const changeTheme = (event) => {
    event.preventDefault();
    dispatch(toggleTheme());
  };

  return (
    <header className={classes.root}>
      <Icon
        onClick={() => navigate('/')}
        className={svg.logo}
        iconHref="#trip_house"
      />
      <nav className={classes.nav}>
        <div className={classes.links}>
          <Links content="Stays" className={classes.link} />
          <Links content="Attractions" className={classes.link} />
        </div>
        <div className={classes.items}>
          <Icon
            onClick={changeTheme}
            className={svg.night}
            iconHref="#night"
          />
          <Icon
            onClick={showDropdown}
            className={svg.accountIcon}
            iconHref={isLogged ? '#account' : '#night-account'}
          />
          <Dropdown isVisible={isVisible} />
          <Icon className={svg.menu} iconHref="#menu" />
        </div>
      </nav>
    </header>
  );
};
