import React from 'react';

import styles from './Container.module.scss';

// eslint-disable-next-line react/prop-types
export const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
