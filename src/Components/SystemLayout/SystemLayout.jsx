import React from 'react';

import { Sprites } from '../Sprites';

import { Provider } from 'react-redux';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../../store';
import { ThemeProvider } from 'react-jss';
import theme from 'tailwindcss/defaultTheme';

export const SystemLayout = () => (
  <>
    <ScrollRestoration />
    <Sprites />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Outlet />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </>
);
