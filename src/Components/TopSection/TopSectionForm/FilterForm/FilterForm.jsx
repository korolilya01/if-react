import React, { useCallback, useState } from 'react';
//import { useTopSectionFormContext } from '../TopSectionFormContext';
import classNames from 'classnames';

import { FilterFormComponent } from './FilterFormComponent';
import { PeopleFilterForm } from './PeopleFilterForm';

import { ChildrenFilterForm } from './PeopleFilterForm/ChildrenFilterForm';

import {
  setAdults,
  setChildren,
  setRooms,
} from '../../../../store/slices/topSectionForm.slice';
import { useDispatch, useSelector } from 'react-redux';
import { topSectionFormSelector } from '../../../../store/selectors/topSectionForm.selector';
//import { useGetAvailableHotelsQuery } from '../../../../store/slices/api.slice';


export const FilterForm = () => {

  const [showFilterForm, setShowFilterForm] = useState(false);
  const [childCount, setChildCount] = useState([]);
  // console.log('childCount' + childCount);

  const toggleVisibility = useCallback(
    (event) => {
      event.preventDefault();
      setShowFilterForm(!showFilterForm);
    },
    [showFilterForm],
  );
  const dispatch = useDispatch();
  // const {
  //   adultsNum,
  //   setAdultsNum,
  //   childrenNum,
  //   setChildrenNum,
  //   roomsNum,
  //   setRoomsNum,
  // } = useTopSectionFormContext();
  const {
    adults: adultsNum,
    children: childrenNum,
    rooms: roomsNum,
  } = useSelector(topSectionFormSelector);
  const handleClickAdults = (value) => {
    dispatch(setAdults(value));
  };
  const handleClickChildren = (value) => {
    dispatch(setChildren(value));
  };
  const handleClickRooms = (value) => {
    dispatch(setRooms(value));
  };

  return (
    <>
      <div
        className={classNames('page__search-info', 'page-text')}
        id="page__search-info"
        onClick={toggleVisibility}
      >
        <FilterFormComponent title="Adults" name="adults" value={adultsNum} />
        <FilterFormComponent
          title="Children"
          name="children"
          value={childrenNum}
        />
        <FilterFormComponent title="Room" name="rooms" value={roomsNum} />
      </div>
      {showFilterForm && (
        <div className="filter" id="filter">
          <PeopleFilterForm
            title="Adults"
            name="adults"
            min={1}
            max={30}
            value={adultsNum}
            onChange={handleClickAdults}
          />
          <PeopleFilterForm
            title="Children"
            name="children"
            min={0}
            max={10}
            value={childrenNum}
            childCount={childCount  }
            setChildCount={setChildCount}
            onChange={handleClickChildren}
          />
          <PeopleFilterForm
            title="Rooms"
            name="rooms"
            min={1}
            max={30}
            value={roomsNum}
            onChange={handleClickRooms}
          />
          <ChildrenFilterForm
            childCount={childCount}
            value={childrenNum}
            onChange={handleClickChildren}
          />
        </div>
      )}
    </>
  );
};
