import React from 'react';

import styles from './Links.module.scss';

export const Links = ({ content, href = '#' }) => (
  <a className={styles.links} href={href}>
    {content}
  </a>
);
