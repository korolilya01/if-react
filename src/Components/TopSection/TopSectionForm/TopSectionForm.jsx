import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../Button';
import { Calendar } from './Calendar';
import { FilterForm } from './FilterForm/index';
import { Icon } from '../../Icon';
import { Input } from '../../Input';

import { setFilters } from '../../../store/slices/topSectionForm.slice';
import { useGetAvailableHotelsQuery } from '../../../store/slices/api.slice';
import { availableSearch } from '../../../store/slices/available.slice';
import { setDestination } from '../../../store/slices/destination.slice';
import { topSectionFormSelector } from '../../../store/selectors/topSectionForm.selector';

import { useAvailableHotelsScrollContext } from '../../sections/AvailableHotels/AvailableHotels.context';

import { styles } from './TopSectionFormStyles/TopSectionFormMain.styles';
import classNames from 'classnames';

export const TopSectionForm = () => {
  const classes = styles();

  const [searchParams, setSearchParams] = useState(null);

  const scrollAvailableHotels = useAvailableHotelsScrollContext();

  const dispatch = useDispatch();

  const { search, dateFrom, dateTo, adults, children, childrenAges, rooms } =
    useSelector(topSectionFormSelector);

  const { data: hotels } = useGetAvailableHotelsQuery(searchParams);
  dispatch(availableSearch(hotels));

  const scrollToAvailableHotels = () => {
    if (scrollAvailableHotels && scrollAvailableHotels.current) {
      scrollAvailableHotels.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const findHotels = (event) => {
    event.preventDefault();

    const destinationValue = event.target.value;
    dispatch(setFilters({ search: destinationValue }));
    setDestination(destinationValue);
  };

  const buttonSearchClick = (event) => {
    event.preventDefault();

    const params = {
      search,
      dateFrom,
      dateTo,
      adults,
      children,
      childrenAges,
      rooms,
    };
    setSearchParams(params);
    scrollToAvailableHotels();
  };

  return (
    <form onSubmit={buttonSearchClick} action="#" method="get">
      <div className={classes.pageSearch}>
        <Icon className={classes.searchIcon} iconHref="#search" />
        <Input
          id="city"
          labelId="city"
          inputClassName={classNames(classes.searchCity, classes.pageText)}
          labelClassName={classNames(classes.textCity, classes.pageText)}
          content="Your destination or hotel name"
          type="text"
          name="destination"
          placeholder=" Your destination or hotel name"
          onChange={findHotels}
        />
        <Calendar />
        <span className={classNames(classes.textDate, classes.pageText)}>
          Check-in - Check-out
        </span>
        <FilterForm />
        <Button
          type="submit"
          className={classes.searchButton}
          buttonName="page__search-button"
          content="Search"
        />
      </div>
    </form>
  );
};
