import React from 'react';

import styles from './Links.module.scss';

// eslint-disable-next-line react/prop-types
export const Links = ({ content, href = '#' }) => (
  <a className={styles.links} href={href}>
    {content}
  </a>
);
