import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';
import { authReducer } from './auth.slice';
import { availableReducer } from './available.slice';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    available: availableReducer,
  }),
);
