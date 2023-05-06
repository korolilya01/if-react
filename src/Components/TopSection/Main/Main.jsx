import React from 'react';

import { TopSectionForm } from '../TopSectionForm';
import { Icon } from '../../Icon';

import styles from './Main.module.scss';

// eslint-disable-next-line react/prop-types
export const Main = () => (
  <main className={styles.page}>
    <h1 className={styles.pageTitle}>
      Discover stays <br />
      to live, work or just relax
    </h1>
    <TopSectionForm />
    <div className={styles.pageApps}>
      <Icon className="googlePlay" iconHref="#google_play" />
      <Icon className="appStore" iconHref="#app_store" />
    </div>
  </main>
);
