import React from 'react';

import { styles } from './Loader.styles';

export const Loader = () => {
  const classes = styles();

  return <div className={classes.root}>Loading...</div>;
};
