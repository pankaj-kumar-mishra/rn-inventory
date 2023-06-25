import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor, RootNavigator, store} from './src';

interface Props {}

const App: FC<Props> = () => {
  console.log('🚀 ~ file: App.tsx:9 ~ store:', store.getState());
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
