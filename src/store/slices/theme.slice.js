import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { theme } = INITIAL_STATE;

const themeSlice = createSlice({
  name: 'theme',
  initialState: theme,
  reducers: {
    toggleTheme: (state) => {
      state.themeStyle = state.themeStyle === 'light' ? 'dark' : 'light';
      state.backgroundImage =
        state.themeStyle === 'light'
          ? "url('../images/laguna_beach.png')"
          : "url('../images/castelmezzano.png')";
    },
  },
});

export const { toggleTheme, toggleThemeBack } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
