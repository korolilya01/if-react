import React from 'react';
import classNames from 'classnames';

import './Title.css';

export const Title = ({ className, content }) => (
  <h2 className={classNames('title', className)}>{content}</h2>
);
