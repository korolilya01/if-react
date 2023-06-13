import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { availableState } = INITIAL_STATE;

const availableSlice = createSlice({
  name: 'authorization',
  initialState: availableState,
  reducers: {
    availableSearch: (state, { payload }) => payload,
  },
});

export const { availableSearch } = availableSlice.actions;
export const availableReducer = availableSlice.reducer;
