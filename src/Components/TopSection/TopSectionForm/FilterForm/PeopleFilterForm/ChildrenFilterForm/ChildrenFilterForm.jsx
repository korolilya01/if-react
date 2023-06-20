import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { topSectionFormSelector } from '../../../../../../store/selectors/topSectionForm.selector';
import { setFilters } from '../../../../../../store/slices/topSectionForm.slice';
import { usePeopleFilterFormStyles } from './PeopleFilterForm.styles';

export const ChildrenFilterForm = ({ value, childCount }) => {
  const classes = usePeopleFilterFormStyles();

  const dispatch = useDispatch();
  const { childrenAges } = useSelector(topSectionFormSelector);
  const handleClickChildrenAges = (event) => {
    event.preventDefault();

    const updatedChildrenAges = { ...childrenAges };
    updatedChildrenAges[event.currentTarget.id] = event.target.value;

    dispatch(
      setFilters({
        childrenAges: Object.values(updatedChildrenAges).slice(0, childCount),
      }),
    );
  };

  const getChildAgeElements = () => {
    const childAge = [];
    for (let j = 0; j <= 17; j++) {
      childAge.push(j);
    }

    const content = [];

    for (let i = 1; i <= value; i++) {
      content.push(
        <select
          id={`child${i}`}
          className={classes.filterSelectForm}
          key={i}
          onChange={handleClickChildrenAges}
        >
          {childAge.map((item) => (
            <option
              // className="child"
              value={item}
              key={item}
            >{`${item} years`}</option>
          ))}
        </select>,
      );
    }
    return content;
  };

  return (
    value > 0 && (
      <div className={classes.filterFormChildren}>
        <p>What is the age of the child you’re travelling with?</p>
        <div className={classes.filterFormChildrenContainer}>
          {getChildAgeElements()}
        </div>
      </div>
    )
  );
};
