import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {testSlice} from '../reducers';

const reducers = combineReducers({
  test: testSlice,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    let defaultMiddleware: any = getDefaultMiddleware();

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

export {store};
