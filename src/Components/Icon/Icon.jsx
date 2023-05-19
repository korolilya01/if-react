import React from 'react';

import './Icon.scss';

export const Icon = ({ className, iconHref }) => (
  <svg className={className}>
    <use href={iconHref} />
  </svg>
);
