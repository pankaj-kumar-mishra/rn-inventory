import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/types';

export type AddOrUpdateNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'AddOrUpdate'
>;

export type AddOrUpdateRouteProps = RouteProp<
  RootStackParamList,
  'AddOrUpdate'
>;
