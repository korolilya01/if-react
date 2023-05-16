import React, { useCallback, useState } from 'react';
import { useTopSectionFormContext } from '../TopSectionFormContext';
import classNames from 'classnames';

import { FilterFormComponent } from './FilterFormComponent';
import { PeopleFilterForm } from './PeopleFilterForm';

import { ChildrenFilterForm } from './PeopleFilterForm/ChildrenFilterForm';

export const FilterForm = () => {
  const [showFilterForm, setShowFilterForm] = useState(false);

  const toggleVisibility = useCallback(
    (event) => {
      event.preventDefault();
      setShowFilterForm(!showFilterForm);
    },
    [showFilterForm],
  );

  const {
    adultsNum,
    setAdultsNum,
    childrenNum,
    setChildrenNum,
    roomsNum,
    setRoomsNum,
  } = useTopSectionFormContext();

  return (
    <>
      <div
        className={classNames('page__search-info', 'page-text')}
        id="page__search-info"
        onClick={toggleVisibility}
      >
        <FilterFormComponent
          title="Adults"
          name="adults"
          value={`${adultsNum}`}
        />
        <FilterFormComponent
          title="Children"
          name="children"
          value={`${childrenNum}`}
        />
        <FilterFormComponent title="Room" name="rooms" value={`${roomsNum}`} />
      </div>
      {showFilterForm && (
        <div className="filter" id="filter">
          <PeopleFilterForm
            title="Adults"
            name="adults"
            min={1}
            max={30}
            value={adultsNum}
            onChange={setAdultsNum}
          />
          <PeopleFilterForm
            title="Children"
            name="children"
            min={0}
            max={10}
            value={childrenNum}
            onChange={setChildrenNum}
          />
          <PeopleFilterForm
            title="Rooms"
            name="rooms"
            min={1}
            max={30}
            value={roomsNum}
            onChange={setRoomsNum}
          />
          <ChildrenFilterForm value={childrenNum} onChange={setChildrenNum} />
        </div>
      )}
    </>
  );
};
