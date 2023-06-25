import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteProduct} from '../../../redux/reducers/productsSlice';
import {selectActiveProducts} from '../../../redux/selectors';
import {HomeNavigationProps} from '../types';

export const useHomeLogic = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const dispatch = useDispatch();
  const products = useSelector(selectActiveProducts);

  const handleEditPress = useCallback(
    (_id: string) => {
      navigation.navigate('AddOrUpdate', {_id});
    },
    [navigation],
  );

  const handleDelete = useCallback(
    (_id: string) => {
      dispatch(deleteProduct(_id));
    },
    [dispatch],
  );

  const handleDeletePress = useCallback(
    (_id: string) => {
      Alert.alert('Are you sure?', "It can't be undone", [
        {text: 'Cancel', onPress: () => {}},
        {
          text: 'Delete',
          onPress: () => handleDelete(_id),
        },
      ]);
    },
    [handleDelete],
  );

  return {
    products,
    handleEditPress,
    handleDeletePress,
  };
};
