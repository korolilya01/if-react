import React, { useCallback, useState } from 'react';

import classNames from 'classnames';

import { FilterFormComponent } from './FilterFormComponent';
import { PeopleFilterForm } from './PeopleFilterForm';
import { ChildrenFilterForm } from './PeopleFilterForm/ChildrenFilterForm';

import {
setFilters
} from '../../../../store/slices/topSectionForm.slice';

import { useDispatch, useSelector } from 'react-redux';
import { topSectionFormSelector } from '../../../../store/selectors/topSectionForm.selector';

export const FilterForm = () => {
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [childCount, setChildCount] = useState([]);

  const toggleVisibility = useCallback(
    (event) => {
      event.preventDefault();
      setShowFilterForm(!showFilterForm);
    },
    [showFilterForm],
  );
  const dispatch = useDispatch();

  const {
    adults,
    children,
    rooms,
  } = useSelector(topSectionFormSelector);

  const handleClick = (payload) => {
    dispatch(setFilters(payload));
  };

  return (
    <>
      <div
        className={classNames('page__search-info', 'page-text')}
        id="page__search-info"
        onClick={toggleVisibility}
      >
        <FilterFormComponent title="Adults" name="adults" value={adults} />
        <FilterFormComponent
          title="Children"
          name="children"
          value={children}
        />
        <FilterFormComponent title="Room" name="rooms" value={rooms} />
      </div>
      {showFilterForm && (
        <div className="filter" id="filter">
          <PeopleFilterForm
            title="Adults"
            name="adults"
            min={1}
            max={30}
            value={adults}
            onChange={(value) => handleClick({ adults: value })}
          />
          <PeopleFilterForm
            title="Children"
            name="children"
            min={0}
            max={10}
            value={children}
            childCount={childCount  }
            setChildCount={setChildCount}
            onChange={(value) => handleClick({ children: value})}
          />
          <PeopleFilterForm
            title="Rooms"
            name="rooms"
            min={1}
            max={30}
            value={rooms}
            onChange={(value) => handleClick({ rooms: value})}
          />
          <ChildrenFilterForm
            childCount={childCount}
            value={children}
            onChange={(value) => handleClick({ children: value})}
          />
        </div>
      )}
    </>
  );
};
