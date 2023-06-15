import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { topSectionForm } = INITIAL_STATE;

const topSectionFormSlice = createSlice({
  name: 'topSectionFormSearch',
  initialState: topSectionForm,
  reducers: {
    setSearch: (state, { payload }) => {
      return {
        ...state,
        search: payload,
      };
    },
    setDateFrom: (state, { payload }) => {
      return {
        ...state,
        dateFrom: payload,
      };
    },
    setDateTo: (state, { payload }) => {
      return {
        ...state,
        dateTo: payload,
      };
    },
    setAdults: (state, { payload }) => {
      return {
        ...state,
        adults: payload,
      };
    },
    setChildren: (state, { payload }) => {
      return {
        ...state,
        children: payload,
      };
    },
    setRooms: (state, { payload }) => {
      return {
        ...state,
        rooms: payload,
      };
    },
    setChildrenAges: (state, { payload }) => {
      return {
        ...state,
        childrenAges: payload,
      };
    },
    setLogOut: () => topSectionForm,
  },
});
export default topSectionFormSlice;
export const {
  setSearch,
  setAdults,
  setChildren,
  setRooms,
  setChildrenAges,
  setDateFrom,
  setDateTo,
  setLogOut,
} = topSectionFormSlice.actions;
export const topSectionFormReducer = topSectionFormSlice.reducer;
