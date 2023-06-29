import React from 'react';

import classNames from 'classnames';
import { styles } from './Container.styles';

export const Container = ({ children, className }) => {
  const classes = styles();

  return <div className={classNames(classes.root, className)}>{children}</div>;
};
