import React from 'react';
import classNames from 'classnames';

import './Title.css';

// eslint-disable-next-line react/prop-types
export const Title = ({ className, content }) => (
  <h2 className={classNames('title', className)}>{content}</h2>
);
