import React, { useCallback } from 'react';

import classNames from 'classnames';
import './PeopleFilterForm.scss';

export const PeopleFilterForm = ({
  title,
  name,
  min,
  max,
  value,
  onChange,
}) => {
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
        <button
          disabled={value === min}
          className={classNames(
            'filter-form__btn',
            `${name}-btn__minus`,
            'filter-btn__minus',
          )}
          onClick={makeMinusInFilter}
        >
          –
        </button>
        <div
          id={`${name}`}
          className={classNames(
            'filter-form__value',
            `filter-form__value--${name}`,
          )}
        >
          {value}
        </div>
        <button
          disabled={value === max}
          className={classNames(
            'filter-form__btn',
            `${name}-btn__plus`,
            'filter-btn__plus',
          )}
          onClick={makePlusInFilter}
        >
          +
        </button>
      </div>
    </div>
  );
};
