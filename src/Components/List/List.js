import React from 'react';

import classNames from 'classnames';

import './List.css';

export const List = ({ className, children }) => (
  <div className={classNames('list', className)}>{children}</div>
);
