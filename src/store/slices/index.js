import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';
import { authReducer } from './auth.slice';
import { availableReducer } from './available.slice';
import { topSectionFormReducer } from './topSectionForm.slice';
import { apiSlice } from './api.slice';
import { destinationReducer } from './destination.slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [apiSlice.reducerPath],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    available: availableReducer,
    topSectionForm: topSectionFormReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    destination: destinationReducer,
  }),
);
