import React from 'react';

import classNames from 'classnames';
import { useContainerStyles } from './Container.styles';

export const Container = ({ children, className }) => {
  const classes = useContainerStyles();
  return (
    <div className={classNames(classes.root, className)}>{children}</div>
  );
};
