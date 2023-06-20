import React from 'react';

import { Links } from '../../Links';

import classNames from 'classnames';
import { useFooterStyles } from '../Footer.styles';

export const FooterColumnLinks = ({ array }) => {
  const classes = useFooterStyles();

  return (
    <div className="col-lg-3 col-md-3 col-sm-1 col-xs-1">
      <ul className={classes.links}>
        {array.map((item) => (
          <li key={item.id}>
            <Links
              content={item.title}
              className={classNames(
                item.id === 1 ? classes.textTitle : '',
                classes.text,
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
