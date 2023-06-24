import React from 'react';

import { TopSectionForm } from '../TopSectionForm';
import { Icon } from '../../Icon';

import { TopSectionFormContextProvider } from '../TopSectionForm/TopSectionFormContext';

import { stylesSVG } from './MainSvg.styles';
import { styles } from './Main.styles';

export const Main = () => {
  const classes = styles();
  const svg = stylesSVG();

  return (
    <main className={classes.root}>
      <h1 className={classes.title}>
        Discover stays <br />
        to live, work or just relax
      </h1>
      <TopSectionFormContextProvider>
        <TopSectionForm />
      </TopSectionFormContextProvider>
      <div className={classes.apps}>
        <Icon className={svg.googlePlay} iconHref="#google_play" />
        <Icon className={svg.appStore} iconHref="#app_store" />
      </div>
    </main>
  );
};
