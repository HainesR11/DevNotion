import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
  DeepPartial,
} from '@reduxjs/toolkit';

import {
  AUTH_SLICE,
  CONFIG_SLICE,
  USER_SLICE,
} from '@DevEx/constants/sliceConstant';
import authReducer from '@DevEx/utils/store/authSlice/authSlice';
import configReducer from '@DevEx/utils/store/configSlice/configSlice';
import userReducer from '@DevEx/utils/store/userSlice/userSlice';

import { createKeychainStorage } from './Keychain';

const keychain = createKeychainStorage();

const userPersistConfig = {
  key: USER_SLICE,
  storage: AsyncStorage,
};

const authPersistConfig = {
  key: AUTH_SLICE,
  storage: keychain,
};

const configPersistConfig = {
  key: CONFIG_SLICE,
  storage: AsyncStorage,
};

const listenerMiddleware = createListenerMiddleware();

const reducers = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  auth: persistReducer(authPersistConfig, authReducer),
  config: persistReducer(configPersistConfig, configReducer),
});

export const setupStore = (preloadedState = {}) =>
  configureStore({
    preloadedState,
    reducer: reducers,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).prepend(listenerMiddleware.middleware),
  });

export const store = setupStore();

export const persist = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type PreloadedState = DeepPartial<RootState>;
