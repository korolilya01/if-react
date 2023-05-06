import React from 'react';
import { Hotels } from '../Hotels';
import classNames from 'classnames';

import styles from './List.module.scss';

// eslint-disable-next-line react/prop-types
export const List = ({ setSwiperButton, className, array }) => {
  // eslint-disable-next-line react/prop-types
  if (array.length <= 4) {
    return setSwiperButton;
  }
  return (
    <div className={classNames(styles.list, className)}>
      {/* eslint-disable-next-line react/prop-types */}
      {array.map((item) => (
        <Hotels key={item.id} {...item} />
      ))}
    </div>
  );
};
