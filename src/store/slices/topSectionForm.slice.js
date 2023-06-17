import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { topSectionForm } = INITIAL_STATE;

const topSectionFormSlice = createSlice({
  name: 'topSectionFormSearch',
  initialState: topSectionForm,
  reducers: {
    setFilters: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
    setLogOut: () => topSectionForm,
  },
});
export default topSectionFormSlice;
export const {
  setFilters,
  setLogOut,
} = topSectionFormSlice.actions;
export const topSectionFormReducer = topSectionFormSlice.reducer;
