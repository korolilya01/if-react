import React, { memo, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.scss';

export const Calendar = memo(() => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDay, endDay] = dateRange;
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
