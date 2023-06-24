import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {RootNavigator} from './src';

interface Props {}

const App: FC<Props> = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
