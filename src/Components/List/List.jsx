import React from 'react';
import { Hotels } from '../Hotels';
import classNames from 'classnames';

import styles from './List.module.scss';

export const List = ({ className, array }) => {
  return (
    <div className={classNames(styles.list, className)}>
      {array.map((item) => (
        <Hotels key={item.id} {...item} />
      ))}
    </div>
  );
};
