import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';
import { darkTheme } from '../../components/Themes/darkTheme.styles';

const { theme } = INITIAL_STATE;

const themeSlice = createSlice({
  name: 'theme',
  initialState: theme,
  reducers: {
    toggleTheme: (state) => {
      state.themeStyle = state.themeStyle === 'light' ? 'dark' : 'light';
      state.themeParams =
        state.themeStyle === 'light' ? theme.themeParams : darkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
