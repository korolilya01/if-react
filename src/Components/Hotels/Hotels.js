import React from 'react';

import classNames from 'classnames';

import { data } from './data';

import './Hotels.css';

export const Hotels = ({ className }) =>
  data.map(({ id, name, city, country, imageUrl }) => (
    <div key={id} className={classNames('swiper-slide', className)}>
      <div className="homes__item">
        <img className="img-style" src={imageUrl} alt={name} />
        <a className="item__text" href="src/Components/Hotels/Hotels#">
          {name}
        </a>
        <p className={classNames('item__text', 'hostel-location')}>
          {city}, {country}
        </p>
      </div>
    </div>
  ));
