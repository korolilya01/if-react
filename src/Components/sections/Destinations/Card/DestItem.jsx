import React from 'react';

import { Button } from '../../../Button';

import { styles } from './DestItem.styles';

export const DestItem = ({ data }) => {
  const classes = styles();

  return data.map((item) => (
    <div key={item.id} className={classes.item}>
      <div className={classes.itemLink}>
        <a href="#">
          <img className={classes.destImg} src={item.src} alt={item.alt} />
          <Button
            type="submit"
            className={classes.butDest}
            content="Book now"
          />
        </a>
      </div>
      <a className="item__text" href="#">
        {item?.dest} {item?.city} {item.country}
      </a>
    </div>
  ));
};
