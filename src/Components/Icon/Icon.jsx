import React from 'react';

import './Icon.scss';

export const Icon = ({ className, iconHref, onClick }) => (
  <svg className={className} onClick={onClick}>
    <use href={iconHref} />
  </svg>
);
