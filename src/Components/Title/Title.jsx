import React from 'react';

import styles from './Title.module.scss';

// eslint-disable-next-line react/prop-types
export const Title = ({ content }) => (
  <h2 className={styles.title}>{content}</h2>
);
