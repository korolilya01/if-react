import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectChildrenAges } from '../../../../../../store/selectors/topSectionForm.selector';
import { setChildrenAges } from '../../../../../../store/slices/topSectionForm.slice';

export const ChildrenFilterForm = ({ value, childCount }) => {
  const childrenAges = useSelector(selectChildrenAges);
  const dispatch = useDispatch();


  const handleClickChildrenAges = (event) => {
    event.preventDefault();

    const updatedChildrenAges = {...childrenAges};
    updatedChildrenAges[event.currentTarget.id] = event.target.value;
    console.log(updatedChildrenAges);

    dispatch(
      setChildrenAges(
        Object.values(updatedChildrenAges).slice(0, childCount),
      ),
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
          className="filter_select-form"
          key={i}
          onChange={handleClickChildrenAges}
        >
          {childAge.map((item) => (
            <option
              className="child"
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
      <div className="filter-form__children filter-form__children--hidden">
        <p>What is the age of the child you’re travelling with?</p>
        <div className="filter-form__children--container">
          {getChildAgeElements()}
        </div>
      </div>
    )
  );
};
