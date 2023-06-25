import React, {FC, useCallback} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {Home, AddOrUpdate, Test} from '../containers';
import {Button} from '../components';

interface Props {}

export type RootStackParamList = {
  Home: undefined;
  AddOrUpdate: undefined | {_id: string};

  Test: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: FC<Props> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const homeHeaderRight = useCallback(
    () => (
      <Button text="Add" onPress={() => navigation.navigate('AddOrUpdate')} />
    ),
    [navigation],
  );

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Products',
          headerRight: homeHeaderRight,
        }}
      />
      <Stack.Screen
        name="AddOrUpdate"
        component={AddOrUpdate}
        options={({route: {params}}) => {
          return {
            presentation: 'modal',
            headerTitle: params ? 'Update Product' : 'Add Product',
          };
        }}
      />

      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
