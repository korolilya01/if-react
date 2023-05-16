import React from 'react';

export const ChildrenFilterForm = ({ value }) => {
  const getChildAgeElements = () => {
    const childAge = [];
    for (let j = 0; j <= 17; j++) {
      childAge.push(j);
    }

    const content = [];

    for (let i = 1; i <= value; i++) {
      content.push(
        <select id={`child${i}`} className="filter_select-form" key={i}>
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
