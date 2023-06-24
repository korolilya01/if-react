import React from 'react';

import { styles } from './TopSection.styles';

import {
  themeSelectorParams,
  themeSelectorStyle,
} from '../../store/selectors/theme.selector';
import { useSelector } from 'react-redux';

export const TopSection = ({ children }) => {
  const themeStyle = useSelector(themeSelectorStyle);
  const themeParams = useSelector(themeSelectorParams);

  const classes = styles(themeParams);

  return (
    <>
      <div style={{ display: 'none' }}>
        {' '}
        {themeStyle === 'light' ? 'light' : 'dark'}{' '}
      </div>
      <section className={classes.root}>{children}</section>
    </>
  );
};
