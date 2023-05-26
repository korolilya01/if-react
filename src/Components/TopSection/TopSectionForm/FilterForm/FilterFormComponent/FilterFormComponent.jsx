import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

export const FilterFormComponent = ({ title, value, name }) => {
  return (
    <div className={classNames('info-column', `column-${name}`)}>
      <p>{title}</p>
      <input
        className={classNames('info-num', `info-num-${name}`, ' page-text')}
        type="text"
        name={name}
        value={value}
        required
      />
    </div>
  );
};

FilterFormComponent.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  name: PropTypes.string,
};
