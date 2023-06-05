import React from 'react';

import classNames from 'classnames';

import './Hotels.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Hotels = ({ imageUrl, name, city, country, id }) => {
  return (
    <div className="homes__item">
      <Link to={`/hotels/${id}`} state={{ imageUrl, name, city, country }}>
        <img className="img-style" src={imageUrl} alt={name} />
        <p className="item__text">{name}</p>
        <p className={classNames('item__text', 'hostel-location')}>
          {city}, {country}
        </p>
      </Link>
    </div>
  );
};

Hotels.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
};
