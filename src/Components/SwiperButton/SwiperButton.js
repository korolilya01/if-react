import React from 'react';

import classNames from 'classnames';

import './SwiperButton.css';

// eslint-disable-next-line react/prop-types
export const SwiperButton = ({ className, children, swiperButton }) => {
  return (
    <div
      className={classNames('swiper-button-next', className)}
      style={swiperButton}
    >
      {children}
    </div>
  );
};
