import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {testSlice, productsSlice} from '../reducers';
import {reduxStorage} from './storage';

const rootPersistConfig = {
  key: 'root',
  storage: reduxStorage,
  blacklist: ['test'],
  // blacklist: ['test', 'products'],
};

const testPersistConfig = {
  key: 'test',
  storage: reduxStorage,
  blacklist: ['data'], // restricted properties
};

const rootReducer = combineReducers({
  test: persistReducer(testPersistConfig, testSlice),
  products: productsSlice,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    let defaultMiddleware = getDefaultMiddleware({
      serializableCheck: false,
    });

    if (__DEV__) {
      const {logger} = require('redux-logger');
      const createDebugger = require('redux-flipper').default;
      // @ts-ignore TODO: Middleware Type Error
      defaultMiddleware = defaultMiddleware
        .concat(logger)
        .concat(createDebugger());
    }

    return defaultMiddleware;
  },
  devTools: __DEV__,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, persistor};
