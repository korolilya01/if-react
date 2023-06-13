import React from 'react';

import { Icon } from '../Icon';

import './Dropdown.scss';
import classNames from 'classnames';

export const Dropdown = ({ setAuthorize, isVisible }) => {

  const handleClick = (event) => {
    event.preventDefault();
    setAuthorize(false);
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
