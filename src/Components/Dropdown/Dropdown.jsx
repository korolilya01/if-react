import React from 'react';
//import { Button } from "../Button";
import { Icon } from '../Icon';

import './Dropdown.scss';
import classNames from 'classnames';

export const Dropdown = ({ setAuthorize, isVisible }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setAuthorize(false);
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
