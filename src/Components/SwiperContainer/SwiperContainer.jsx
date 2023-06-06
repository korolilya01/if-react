import React from 'react';

import './SwiperContainer.css';
import classNames from 'classnames';

export const SwiperContainer = ({ children, className }) => (
  <div className={classNames('swiper-container', className)}>{children}</div>
);
