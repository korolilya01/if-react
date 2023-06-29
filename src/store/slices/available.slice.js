import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { topSectionForm } = INITIAL_STATE;

const availableSlice = createSlice({
  name: 'availableSearch',
  initialState: topSectionForm,
  reducers: {
    availableSearch: (state, { payload }) => payload,
  },
});

export const { availableSearch } = availableSlice.actions;
export const availableReducer = availableSlice.reducer;
