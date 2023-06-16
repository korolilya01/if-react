import React from 'react';
import { Provider } from 'react-redux';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { store } from '../../store';
import { Sprites } from '../Sprites';

export const SystemLayout = () => (
  <>
    <ScrollRestoration />
    <Sprites />
    <Provider store={store}>
      <Outlet />
    </Provider>
  </>
);
