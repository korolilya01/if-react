import React from 'react';

import { TopSectionForm } from '../TopSectionForm';
import { Icon } from '../../Icon';

import styles from './Main.module.scss';

export const Main = ({ setVisibleHotels, setAvailableHotels }) => (
  <main className={styles.page}>
    <h1 className={styles.pageTitle}>
      Discover stays <br />
      to live, work or just relax
    </h1>
    <TopSectionForm
      setAvailableHotels={setAvailableHotels}
      setVisibleHotels={setVisibleHotels}
    />
    <div className={styles.pageApps}>
      <Icon className="googlePlay" iconHref="#google_play" />
      <Icon className="appStore" iconHref="#app_store" />
    </div>
  </main>
);
