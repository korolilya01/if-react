import React from 'react';

import { TopSectionForm } from '../TopSectionForm';
import { Icon } from '../../Icon';

import { TopSectionFormContextProvider } from '../TopSectionForm/TopSectionFormContext';

import { useMainSvgStyles } from './MainSvg.styles';
import { useMainStyles } from './Main.styles';

export const Main = () => {
  const classes = useMainStyles();
  const svg = useMainSvgStyles();

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
