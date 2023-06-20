import React from 'react';

import { Sprites } from '../Sprites';

import { Provider } from 'react-redux';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../../store';

export const SystemLayout = () =>  (
    <>
      <ScrollRestoration />
      <Sprites />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Outlet />
        </PersistGate>
      </Provider>
    </>
  );
