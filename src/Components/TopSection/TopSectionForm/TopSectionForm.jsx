import React, { memo } from 'react';

import { Button } from '../../Button';
import { Calendar } from './Calendar';
import { FilterForm } from './FilterForm/index';
import { Icon } from '../../Icon';
import { Input } from '../../Input';

import './TopSectionFormStyles/TopSectionFormMain.scss';

import { useAvailableHotelsScrollContext } from '../../sections/AvailableHotels/AvailableHotels.context';

import { getAvailableHotels } from '../../../services';
import { useDispatch } from 'react-redux';
import { availableActions } from '../../../store/actions/availbale.actions';

import './TopSectionForm.scss';

export const TopSectionForm = memo(() => {
  const scrollAvailableHotels = useAvailableHotelsScrollContext();
  const dispatch = useDispatch();
  const buttonSearchClick = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const { destination } = data;
    getAvailableHotels(destination).then((hotels) => {
      dispatch(availableActions(hotels));
    });
  };
  const scrollToAvailableHotels = () => {
    if (scrollAvailableHotels && scrollAvailableHotels.current) {
      // checking if the object and its properties are current
      scrollAvailableHotels.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  setTimeout(() => {
    scrollToAvailableHotels();
  }, 20);

  return (
    <form
      onSubmit={buttonSearchClick}
      action="#"
      method="get"
      className="form-filter"
    >
      <div className="page__search">
        <Icon className="searchIcon" iconHref="#search" />
        <Input
          id="city"
          labelId="city"
          inputClassName="page__search-city page-text"
          labelClassName="text-city page-text"
          content="Your destination or hotel name"
          type="text"
          name="destination"
          placeholder=" Your destination or hotel name"
        />
        <Calendar />
        <span className="text-date page-text">Check-in - Check-out</span>
        <FilterForm />
        <Button
          type="submit"
          buttonClassName="page__search-button"
          buttonName="page__search-button"
          content="Search"
          onClick={scrollToAvailableHotels}
        />
      </div>
    </form>
  );
});
