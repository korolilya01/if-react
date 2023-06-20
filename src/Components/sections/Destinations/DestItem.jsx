import React from 'react';

import { Button } from '../../Button';

import { useDestItemStyles } from './DestItem.styles';

export const DestItem = ({ data }) => {
  const classes = useDestItemStyles();

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
      <a href="#">
        {item?.dest} {item?.city} {item.country}
      </a>
    </div>
  ));
};
