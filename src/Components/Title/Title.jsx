import React from 'react';

import PropTypes from 'prop-types';

import { styles } from './Title.styles';
import classNames from 'classnames';

export const Title = ({ content, className }) => {
  const classes = styles();

  return <h2 className={classNames(classes.root, className)}>{content}</h2>;
};
Title.propTypes = {
  content: PropTypes.string,
};
