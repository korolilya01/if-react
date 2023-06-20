import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';
import { useTopSectionFormMainStyles } from '../../TopSectionFormStyles/TopSectionFormMain.styles';

export const FilterFormComponent = ({ title, value, name }) => {
  const classes = useTopSectionFormMainStyles();

  return (
    <div className={classNames(classes.infoColumn,  classes[`column${title}`])}>
      <p>{title}</p>
      <input
        className={classNames(classes.infoNum, classes.pageText)}
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
