import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../Button';
import { Calendar } from './Calendar';
import { FilterForm } from './FilterForm/index';
import { Icon } from '../../Icon';
import { Input } from '../../Input';

import { setFilters } from '../../../store/slices/topSectionForm.slice';
import { useGetAvailableHotelsQuery } from '../../../store/slices/api.slice';
import { availableSearch } from '../../../store/slices/available.slice';
import { topSectionFormSelector } from '../../../store/selectors/topSectionForm.selector';

import { useAvailableHotelsScrollContext } from '../../sections/AvailableHotels/AvailableHotels.context';

import {useTopSectionFormMainStyles} from './TopSectionFormStyles/TopSectionFormMain.styles';
import classNames from 'classnames';

export const TopSectionForm = memo(() => {
  const classes = useTopSectionFormMainStyles();
  //to pass the data to useGetAvailableHotelsQuery through onSubmit
  const [searchParams, setSearchParams] = useState(null);

  const scrollAvailableHotels = useAvailableHotelsScrollContext();
  const dispatch = useDispatch();

  const {
    search,
    dateFrom,
    dateTo,
    adults,
    children,
    childrenAges,
    rooms
  } =
    useSelector(topSectionFormSelector);

  const { data: hotels } = useGetAvailableHotelsQuery(searchParams);
  dispatch(availableSearch(hotels));

  const buttonSearchClick = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const { destination } = data;

    await dispatch(setFilters({ search: destination }));

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
  };

  const scrollToAvailableHotels = () => {
    if (scrollAvailableHotels && scrollAvailableHotels.current) {
      // checking if the object and its properties are current
      scrollAvailableHotels.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    setTimeout(() => {
      scrollToAvailableHotels();
    }, 20);
  };

  return (
    <form
      onSubmit={buttonSearchClick}
      action="#"
      method="get"
    >
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
        />
        <Calendar />
        <span className={classNames(classes.textDate, classes.pageText)}>Check-in - Check-out</span>
        <FilterForm />
        <Button
          type="submit"
          className={classes.searchButton}
          buttonName="page__search-button"
          content="Search"
          onClick={scrollToAvailableHotels}
        />
      </div>
    </form>
  );
});
