import React from 'react';

import { Icon } from '../../Icon';

import PropTypes from 'prop-types';

import '../../../css/styles.css';
import './Reviews.scss';

export const ReviewsPage = ({
  name,
  location,
  description,
  price,
  img,
  mark,
  reviews,
  author,
  authorCountry,
  countryFlag,
}) => {
  return (
    <div className="reviews__item">
      <div className="reviews__block-top">
        <img className="reviews__img" src={img} alt={name} />
        <p className="reviews__text reviews__decor">{price}</p>
      </div>
      <div className="reviews__block-info">
        <a href="#" className="reviews__text reviews__text-name">
          {name}
        </a>
        <a href="#" className="reviews__text reviews__text-location">
          {location}
        </a>
        <div className="reviews__mark">
          <p className="reviews__mark-text">{mark}</p>
        </div>
        <p className="reviews__score">{reviews}</p>
      </div>
      <div className="reviews__commit">
        <Icon className="icon-reviews__commit" iconHref="#reviews__person" />
        <div className="reviews__commit-person-info">
          <p className="reviews__text">{author}</p>
          <p className="reviews__text reviews__commit-country">
            <Icon className="icon-flag" iconHref={countryFlag} />
            {authorCountry}
          </p>
        </div>
      </div>
      <p className="reviews__text reviews__text-indent">{description}</p>
    </div>
  );
};

ReviewsPage.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  mark: PropTypes.string,
  authorCountry: PropTypes.string,
  reviews: PropTypes.string,
  img: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  countryFlag: PropTypes.string,
};
