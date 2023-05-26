import React from 'react';

import styles from './Links.module.scss';
import PropTypes from 'prop-types';

export const Links = ({ content, href = '#' }) => (
  <a className={styles.links} href={href}>
    {content}
  </a>
);

Links.propTypes = {
  content: PropTypes.string,
  href: PropTypes.string,
};
