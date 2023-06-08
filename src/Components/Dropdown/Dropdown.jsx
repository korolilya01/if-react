import React from 'react';
import { useDispatch } from 'react-redux';

import { Icon } from '../Icon';
import { logoutAction } from '../../store/actions/auth.actions';

import classNames from 'classnames';

import './Dropdown.scss';

export const Dropdown = ({ isVisible }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutAction);
  };
  return (
    <button
      onClick={handleClick}
      className={classNames(
        'sign-out-button',
        `${!isVisible && 'sign-out-button--hidden'}`,
      )}
    >
      <Icon iconHref="#sign-out" className="sign-out-svg" />
      Sign out
    </button>
  );
};
