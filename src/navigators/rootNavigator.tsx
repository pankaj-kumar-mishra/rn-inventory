import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {AddOrUpdate} from '../screens';

interface Props {}

export type RootStackParamList = {
  Home: undefined;
  AddOrUpdate: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: FC<Props> = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="AddOrUpdate"
        component={AddOrUpdate}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
