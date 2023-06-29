import React from 'react';
import { useDispatch } from 'react-redux';

import { Icon } from '../Icon';
import { logout } from '../../store/slices/auth.slice';

import { setLogOut } from '../../store/slices/topSectionForm.slice';

import { styles } from './Dropdown.styles';

export const Dropdown = ({ isVisible }) => {
  const classes = styles();

  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(logout());
    dispatch(setLogOut());
  };

  return (
    isVisible && (
      <button onClick={handleClick} className={classes.root}>
        <Icon iconHref="#sign-out" className={classes.svg} />
        Sign out
      </button>
    )
  );
};
