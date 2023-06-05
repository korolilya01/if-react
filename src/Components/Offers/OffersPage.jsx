import React from 'react';

import { Icon } from '../Icon';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import './Offers.scss';

export const OffersPage = ({ description, name, tag }) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
      <div className="offers__item">
        <Icon className={classNames(name, 'offers__icon')} iconHref={tag} />
        <p>{description}</p>
      </div>
    </div>
  );
};

OffersPage.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
};
