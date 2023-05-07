import React from 'react';

import './Icon.scss';

// eslint-disable-next-line react/prop-types
export const Icon = ({ className, iconHref }) => (
  <svg className={className}>
    <use href={iconHref} />
  </svg>
);
