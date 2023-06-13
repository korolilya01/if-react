import React from 'react';

import { Links } from '../../Links';

import classNames from 'classnames';

export const FooterColumnLinks = ({ array }) => (
  <div className="col-lg-3 col-md-3 col-sm-1 col-xs-1">
    <ul className="footer__links">
      {array.map((item) => (
        <li key={item.id}>
          <Links
            content={item.title}
            className={classNames(item.titleFontWeight, 'footer__text')}
          />
        </li>
      ))}
    </ul>
  </div>
);
