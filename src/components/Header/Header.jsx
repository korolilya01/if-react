import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';
import { Links } from '../Links';

import { authSelector } from '../../store/selectors/auth.selector';

import { styles } from './Header.styles';
import { stylesSVG } from './HeaderSvg.styles';

import { toggleTheme } from '../../store/slices/theme.slice';
import {
  themeSelectorParams,
  themeSelectorStyle,
} from '../../store/selectors/theme.selector';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const classes = styles();
  const svg = stylesSVG();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const themeStyle = useSelector(themeSelectorStyle);
  const themeParams = useSelector(themeSelectorParams);

  const showDropdown = () => {
    setIsVisible(!isVisible);
  };
  const isLogged = useSelector(authSelector);

  const changeTheme = (event) => {
    event.preventDefault();
    dispatch(toggleTheme());
  };

  return (
    <>
      <div style={{ display: 'none' }}>
        {' '}
        {themeStyle === 'light' ? 'light' : 'dark'}{' '}
      </div>
      <header className={classes.root}>
        <Icon
          onClick={() => navigate('/')}
          className={svg.logo}
          iconHref={themeParams.theme.themeParams.iconLogo}
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
              iconHref={themeParams.theme.themeParams.iconNight}
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
    </>
  );
};
