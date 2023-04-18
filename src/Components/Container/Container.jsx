import React from 'react';
import classNames from 'classnames';

import './Container.css';

// eslint-disable-next-line react/prop-types
export const Container = ({ children, className }) => (
  <div className={classNames('container', className)}>{children}</div>
);
