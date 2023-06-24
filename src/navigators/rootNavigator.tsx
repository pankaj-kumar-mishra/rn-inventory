import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {AddOrUpdate, Test} from '../screens';

interface Props {}

export type RootStackParamList = {
  Home: undefined;
  AddOrUpdate: undefined;

  Test: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: FC<Props> = () => {
  return (
    <Stack.Navigator initialRouteName="Test">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="AddOrUpdate"
        component={AddOrUpdate}
        options={{presentation: 'modal'}}
      />

      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
