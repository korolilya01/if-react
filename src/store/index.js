import { configureStore } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist';

import { rootReducer } from './slices';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);
