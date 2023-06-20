import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { destination } = INITIAL_STATE;

const destinationSlice = createSlice({
  name: 'destination',
  initialState: destination,
  reducers: {
    setDestination: (state, { payload }) => payload,
  },
});

export const { setDestination } = destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
