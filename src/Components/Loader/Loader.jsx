import React from 'react';

import { useLoaderStyles } from './Loader.styles';

export const Loader = () => {
  const classes = useLoaderStyles();
  return <div className={classes.root}>Loading...</div>;
};
