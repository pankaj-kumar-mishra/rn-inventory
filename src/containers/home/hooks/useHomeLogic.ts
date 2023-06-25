import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {Alert} from 'react-native';
import {ProductModel} from '../../../utils';
import {HomeNavigationProps} from '../types';

export const useHomeLogic = () => {
  const navigation = useNavigation<HomeNavigationProps>();

  const products: ProductModel[] = [
    {
      _id: '1',
      name: 'Name1',
      price: 10,
      image: 'https://placeimg.com/640/480',
      quantity: 100,
      sku: 'sku1',
    },
    {
      _id: '2',
      name: 'Name2',
      price: 15,
      image: 'http://placeimg.com/640/480',
      quantity: 50,
      sku: 'sku2',
    },
    {
      _id: '3',
      name: 'Name3',
      price: 20,
      image: 'https://placeimg.com/640/480',
      quantity: 60,
      sku: 'sku3',
    },
  ];

  const handleEditPress = useCallback(
    (_id: string) => {
      console.log('🚀 ~ file: useHomeLogic.ts:33 ~ ID:', _id);
      navigation.navigate('AddOrUpdate', {_id});
    },
    [navigation],
  );

  const handleDeletePress = useCallback((_id: string) => {
    console.log('🚀 ~ file: useHomeLogic.ts:37 ~ ID:', _id);
    Alert.alert('Are you sure?', "It can't be undone", [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'Delete',
        onPress: () => {
          console.log('Delete');
        },
      },
    ]);
  }, []);

  return {
    products,
    handleEditPress,
    handleDeletePress,
  };
};
