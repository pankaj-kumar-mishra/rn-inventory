import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {RootNavigator, store} from './src';

interface Props {}

const App: FC<Props> = () => {
  console.log('🚀 ~ file: App.tsx:9 ~ store:', store.getState());
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
