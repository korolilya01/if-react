import React from 'react';

import styles from './Title.module.scss';

export const Title = ({ content }) => (
  <h2 className={styles.title}>{content}</h2>
);
