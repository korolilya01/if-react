import React from 'react';

import PropTypes from 'prop-types';

import { useTitleStyles } from './Title.styles';
import classNames from 'classnames';

export const Title = ({ content, className }) => {
  const classes = useTitleStyles();

  return <h2 className={classNames(classes.root, className)}>{content}</h2>;
};
Title.propTypes = {
  content: PropTypes.string,
};
