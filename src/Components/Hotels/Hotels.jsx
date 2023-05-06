import React from 'react';

import classNames from 'classnames';

import './Hotels.css';

// eslint-disable-next-line react/prop-types
export const Hotels = ({ imageUrl, name, city, country }) => {
  return (
    <div className="homes__item">
      <img className="img-style" src={imageUrl} alt={name} />
      <a className="item__text" href="src/Components/Hotels/Hotels#">
        {name}
      </a>
      <p className={classNames('item__text', 'hostel-location')}>
        {city}, {country}
      </p>
    </div>
  );
};