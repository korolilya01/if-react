import React from 'react';

import classNames from 'classnames';

import './SwiperButton.css';

export const SwiperButton = ({ className, children }) => (
  <div className={classNames('swiper-button-next', className)}>{children}</div>
);
