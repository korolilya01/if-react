import React from 'react';

import { Icon } from '../../../Icon';

import PropTypes from 'prop-types';

import classNames from 'classnames';
import { styles } from '../Offers.styles';

export const OffersPage = ({ description, name, tag }) => {
  const classes = styles();

  return (
    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
      <div className={classes.item}>
        <Icon
          className={classNames(classes.icon, classes[`${name}`])}
          iconHref={tag}
        />
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

OffersPage.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
};
