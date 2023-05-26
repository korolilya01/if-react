import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../../Button';

import classNames from 'classnames';
import './PeopleFilterForm.scss';

export const PeopleFilterForm = memo(function PeopleFilterForm({
  title,
  name,
  min,
  max,
  value,
  onChange,
}) {
  const makePlusInFilter = useCallback(
    (event) => {
      event.preventDefault();
      onChange(value + 1);
    },
    [onChange, value],
  );
  const makeMinusInFilter = useCallback(
    (event) => {
      event.preventDefault();
      onChange(value - 1);
    },
    [onChange, value],
  );
  return (
    <div className="filter-form">
      <p className={classNames('filter-form__property', 'filter-form__value')}>
        {title}
      </p>
      <div className="filter-form__counter">
        <Button
          buttonClassName={classNames(
            'filter-form__btn',
            `${name}-btn__minus`,
            'filter-btn__minus',
          )}
          onClick={makeMinusInFilter}
          content="-"
          disabled={value === min}
        />
        <div
          id={`${name}`}
          className={classNames(
            'filter-form__value',
            `filter-form__value--${name}`,
          )}
        >
          {value}
        </div>
        <Button
          buttonClassName={classNames(
            'filter-form__btn',
            `${name}-btn__plus`,
            'filter-btn__plus',
          )}
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
