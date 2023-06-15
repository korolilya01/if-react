import React, { memo, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import {
  setDateFrom,
  setDateTo,
} from '../../../../store/slices/topSectionForm.slice';

import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.scss';
import { useDispatch } from 'react-redux';

export const Calendar = memo(() => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDay, endDay] = dateRange;

  const dispatch = useDispatch();

  const dispatchDateString = (startDate, endDate) => {
    const startDateString = startDate ? startDate.toISOString() : null; //converting to string
    const endDateString = endDate ? endDate.toISOString() : null;

    dispatch(setDateFrom(startDateString));
    dispatch(setDateTo(endDateString));
  };

  useEffect(() => {
    dispatchDateString(startDay, endDay);
  }, [startDay, endDay]);

  return (
    <DatePicker
      className="calendar-text"
      onChange={(date) => setDateRange(date)}
      selectsRange={true}
      startDate={startDay}
      endDate={endDay}
      placeholderText="Check-in — Check-out"
      minDate={new Date()}
      monthsShown={2}
      dateFormat="dd-MMM-yy"
    />
  );
});
