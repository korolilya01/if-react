import React from 'react';
import { useDispatch } from 'react-redux';

import { Icon } from '../Icon';
import { logout } from '../../store/slices/auth.slice';

import classNames from 'classnames';

import './Dropdown.scss';

export const Dropdown = ({ isVisible }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout);
  };

  return (
    isVisible && (
      <button onClick={handleClick} className={classNames('sign-out-button')}>
        <Icon iconHref="#sign-out" className="sign-out-svg" />
        Sign out
      </button>
    )
  );
};
