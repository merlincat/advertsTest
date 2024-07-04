import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  import campelsReducer from './campelSlice'

  const campelPersistConfig = {
    key: 'catalog',
    storage,
    whitelist:["favorites"]
  };

  const persistedCamelhReducer = persistReducer(campelPersistConfig, campelsReducer);

export const store = configureStore({
  reducer: {
    catalog:persistedCamelhReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);