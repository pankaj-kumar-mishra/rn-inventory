import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {testSlice, productsSlice} from '../reducers';
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
  products: productsSlice,
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
// console.log('🚀 ~ file: index.ts:47 ~ store:', store.getState());

export {store, persistor};
