import React from 'react';

import { Calendar } from './Calendar';
import { FilterForm } from './FilterForm/index';
import { Icon } from '../../Icon';

import './TopSectionForm.scss';

import { getAvailableHotels } from '../../../services/index';
import { useAvailableHotelsContext } from '../../sections/AvailableHotels/AvailableHotels.context';

export const TopSectionForm = () => {
  const { setCards } = useAvailableHotelsContext();
  const buttonSearchClick = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { destination } = data;
    getAvailableHotels(destination).then((hotels) => setCards(hotels));
  };
  return (
    <form
      onSubmit={buttonSearchClick}
      action="#"
      method="get"
      className="form-filter"
    >
      <div className="page__search">
        <Icon className="searchIcon" iconHref="#search" />
        <label htmlFor="city" className="text-city page-text">
          Your destination or hotel name
        </label>
        <input
          id="city"
          className="page__search-city page-text"
          type="text"
          name="destination"
          placeholder=" Your destination or hotel name"
        />
        <Calendar />
        <span className="text-date page-text">Check-in - Check-out</span>

        <FilterForm />

        <button
          className="page__search-button"
          type="submit"
          name="page__search-button"
        >
          Search
        </button>
      </div>
    </form>
  );
};
