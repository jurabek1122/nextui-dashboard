import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './slice';
// import { shazamCoreApi } from './services/shazamCore'

export const store = configureStore({
  reducer: {
    // [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    items: playerReducer,
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware)
});