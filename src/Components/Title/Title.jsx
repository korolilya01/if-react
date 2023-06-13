import React from 'react';

import styles from './Title.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Title = ({ content, className }) => (
  <h2 className={classNames(styles.title, className)}>{content}</h2>
);

Title.propTypes = {
  content: PropTypes.string,
};
