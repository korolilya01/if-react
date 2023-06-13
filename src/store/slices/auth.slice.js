import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { authState } = INITIAL_STATE;

const authSlice = createSlice({
  name: 'authorization',
  initialState: authState,
  reducers: {
    login: (state, { payload }) => payload,
    logout: () => authState,
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
