import React from 'react';

import styles from './Container.module.scss';
import classNames from 'classnames';

export const Container = ({ children, className }) => (
  <div className={classNames(styles.container, className)}>{children}</div>
);
