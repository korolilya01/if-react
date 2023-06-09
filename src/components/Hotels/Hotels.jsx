import React from 'react';

import { Link } from 'react-router-dom';

import { styles } from './Hotels.styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Hotels = ({ imageUrl, name, city, country, id }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
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
