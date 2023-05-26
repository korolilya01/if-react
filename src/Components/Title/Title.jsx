import React from 'react';

import styles from './Title.module.scss';
import PropTypes from 'prop-types';

export const Title = ({ content }) => (
  <h2 className={styles.title}>{content}</h2>
);

Title.propTypes = {
  content: PropTypes.string,
};
