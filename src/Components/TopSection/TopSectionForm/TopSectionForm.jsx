import React from 'react';

import { HOTEL_DATA } from '../../Hotels/data';
import { Icon } from '../../Icon';

import './TopSectionForm.scss';

// eslint-disable-next-line react/prop-types
export const TopSectionForm = ({ setAvailableHotels, setVisibleHotels }) => {
  const buttonSearchClick = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { destination } = data;

    setAvailableHotels(
      HOTEL_DATA.filter(({ name, city, country }) => {
        return (
          name.includes(destination) ||
          city.includes(destination) ||
          country.includes(destination)
        );
      }),
    );
    setVisibleHotels('block');
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
        <label htmlFor="date-in" className="text-date page-text">
          Check-in - Check-out
        </label>
        <div className="page__search-date">
          <label htmlFor="date-in" className="date-in-mob page-text">
            Check-in date
          </label>
          <input
            id="date-in"
            className="date-in page-text"
            type="date"
            name="choose-date-in"
          />
          <label htmlFor="date-out" className="date-out-mob page-text">
            Check-out date
          </label>
          <input
            id="date-out"
            type="date"
            className="date-out page-text"
            name="choose-date-out"
          />
        </div>
        <div className="page__search-info page-text" id="page__search-info">
          <div className="info-column column-adults">
            <p>Adults</p>
            <input
              className="info-num info-num-adults page-text"
              type="text"
              name="choose-adult"
              value="1"
              required
            />
          </div>
          <div className="info-column column-children">
            <p>Children</p>
            <input
              className="info-num info-num-children page-text"
              type="text"
              name="choose-children"
              value="0"
              required
            />
          </div>
          <div className="info-column column-room">
            <p>Room</p>
            <input
              className="info-num info-num-rooms page-text"
              type="text"
              name="choose-room"
              value="1"
              required
            />
          </div>
          <div className="filter filter-hidden" id="filter">
            <div className="filter-form">
              <p className="filter-form__property filter-form__value">Adults</p>
              <div className="filter-form__counter">
                <button
                  disabled
                  className="filter-form__btn adults-btn__minus filter-btn__minus"
                >
                  –
                </button>
                <div
                  id="adults"
                  className="filter-form__value filter-form__value--adults"
                >
                  1
                </div>
                <button className="filter-form__btn adults-btn__plus filter-btn__plus">
                  +
                </button>
              </div>
            </div>
            <div className="filter-form">
              <p className="filter-form__property filter-form__value">
                Children
              </p>
              <div className="filter-form__counter">
                <button
                  disabled
                  className="filter-form__btn children-btn__minus filter-btn__minus"
                >
                  –
                </button>
                <div
                  id="children"
                  className="filter-form__value filter-form__value--children"
                >
                  0
                </div>
                <button className="filter-form__btn children-btn__plus filter-btn__plus">
                  +
                </button>
              </div>
            </div>
            <div className="filter-form">
              <p className="filter-form__property filter-form__value">Rooms</p>
              <div className="filter-form__counter">
                <button
                  disabled
                  className="filter-form__btn rooms-btn__minus filter-btn__minus"
                >
                  –
                </button>
                <div
                  id="rooms"
                  className="filter-form__value filter-form__value--rooms"
                >
                  1
                </div>
                <button className="filter-form__btn rooms-btn__plus filter-btn__plus">
                  +
                </button>
              </div>
            </div>
            <div className="filter-form__children filter-form__children--hidden">
              <p>What is the age of the child you’re travelling with?</p>
              <div className="filter-form__children--container"></div>
            </div>
          </div>
        </div>
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
