import React from 'react';

import { Icon } from '../../Icon';

import PropTypes from 'prop-types';

import { useReviewsStyles } from './Reviews.styles';
import classNames from 'classnames';

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
  const classes = useReviewsStyles();

  return (
    <div className={classes.item}>
      <div className={classes.blockTop}>
        <img className={classes.img} src={img} alt={name} />
        <p className={classNames(classes.text, classes.decor)}>{price}</p>
      </div>
      <div className={classes.blockInfo}>
        <a href="#" className={classNames(classes.text, classes.textName)}>
          {name}
        </a>
        <a href="#" className={classNames(classes.text, classes.textLocation)}>
          {location}
        </a>
        <div className={classes.mark}>
          <p className={classes.markText}>{mark}</p>
        </div>
        <p className={classes.score}>{reviews}</p>
      </div>
      <div className={classes.commit}>
        <Icon className={classes.iconCommit} iconHref="#reviews__person" />
        <div className={classes.commitPersonInfo}>
          <p className={classes.text}>{author}</p>
          <p className={classNames(classes.text, classes.commitCountry)}>
            <Icon className={classes.iconFlag} iconHref={countryFlag} />
            {authorCountry}
          </p>
        </div>
      </div>
      <p className={classNames(classes.text, classes.textIndent)}>
        {description}
      </p>
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
