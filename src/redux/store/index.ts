import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {testSlice} from '../reducers';
import {reduxStorage} from './storage';

const rootPersistConfig = {
  key: 'root',
  storage: reduxStorage,
  blacklist: ['test'],
};

const testPersistConfig = {
  key: 'test',
  storage: reduxStorage,
  blacklist: ['data'], // restricted properties
};

const rootReducer = combineReducers({
  test: persistReducer(testPersistConfig, testSlice),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    let defaultMiddleware: any = getDefaultMiddleware({
      serializableCheck: false,
    });

    if (__DEV__) {
      const {logger} = require('redux-logger');
      const createDebugger = require('redux-flipper').default;

      defaultMiddleware = defaultMiddleware
        .concat(logger)
        .concat(createDebugger());
    }

    return defaultMiddleware;
  },
  devTools: __DEV__,
});

const persistor = persistStore(store);

export {store, persistor};
