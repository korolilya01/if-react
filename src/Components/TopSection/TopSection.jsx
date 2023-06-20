import React from 'react';

import { topSectionStyles } from './TopSection.styles';

import {
  themeSelectorBckg,
  themeSelectorStyle,
} from '../../store/selectors/theme.selector';
import { useSelector } from 'react-redux';

export const TopSection = ({ children }) => {
  const classes = topSectionStyles();

  const themeStyle = useSelector(themeSelectorStyle);
  const backgroundImage = useSelector(themeSelectorBckg);

  return (
    <>
      <div style={{ display: 'none' }}> {themeStyle === 'light' ? 'light' : 'dark'} </div>
      <section
        style={{ backgroundImage: backgroundImage }}
        className={classes.root}
      >
        {children}
      </section>
    </>
  );
};
