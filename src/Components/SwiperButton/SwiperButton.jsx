import React from 'react';

import classNames from 'classnames';

import './SwiperButton.css';
import './Arrow.css';

export const SwiperButton = ({ className }) => (
  <div className={classNames('swiper-button-next', className)}>
    <div className="arrows"></div>
  </div>
);
