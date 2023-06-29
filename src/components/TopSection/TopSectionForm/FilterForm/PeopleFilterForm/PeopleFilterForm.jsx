import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../../Button';

import classNames from 'classnames';
import { usePeopleFilterFormStyles } from './ChildrenFilterForm/PeopleFilterForm.styles';

export const PeopleFilterForm = memo(function PeopleFilterForm({
  title,
  name,
  min,
  max,
  value,
  setChildCount,
  onChange,
}) {
  const classes = usePeopleFilterFormStyles();

  const makePlusInFilter = useCallback(
    (event) => {
      event.preventDefault();
      onChange(value + 1);
      if (title === 'Children') {
        setChildCount(value + 1);
      }
    },
    [onChange, value],
  );
  const makeMinusInFilter = useCallback(
    (event) => {
      event.preventDefault();
      onChange(value - 1);
      if (title === 'Children') {
        setChildCount(value - 1);
      }
    },
    [onChange, value],
  );
  return (
    <div className={classes.filterForm}>
      <p
        className={classNames(
          classes.filterFormProperty,
          classes.filterFormValue,
        )}
      >
        {title}
      </p>
      <div className={classes.filterFormCounter}>
        <Button
          className={classes.filterFormBtn}
          onClick={makeMinusInFilter}
          content="-"
          disabled={value === min}
        />
        <div id={`${name}`} className={classes.filterFormValue}>
          {value}
        </div>
        <Button
          className={classes.filterFormBtn}
          onClick={makePlusInFilter}
          content="+"
          disabled={value === max}
        />
      </div>
    </div>
  );
});

PeopleFilterForm.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};
