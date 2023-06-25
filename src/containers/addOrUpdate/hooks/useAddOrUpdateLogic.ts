import {useNavigation, useRoute} from '@react-navigation/native';
import {useCallback, useState, useEffect, useMemo} from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import uuid from 'react-native-uuid';
import {addProduct, updateProduct} from '../../../redux/reducers/productsSlice';
import {selectActiveProducts} from '../../../redux/selectors';
import {areSameObjects, ProductModel} from '../../../utils';
import {AddOrUpdateNavigationProps, AddOrUpdateRouteProps} from '../types';

export const useAddOrUpdateLogic = () => {
  const navigation = useNavigation<AddOrUpdateNavigationProps>();
  const {params} = useRoute<AddOrUpdateRouteProps>();
  const dispatch = useDispatch();
  const products = useSelector(selectActiveProducts);
  const [formData, setFormData] = useState<ProductModel>(() => ({
    _id: params?._id || uuid.v4().toString(),
    name: 'name_',
    price: '10',
    image: 'http://placeimg.com/640/480',
    quantity: '100',
    sku: 'sku_',
  }));

  const currProduct = useMemo(
    () => products.find(item => item._id === params?._id),
    [params?._id, products],
  );

  useEffect(() => {
    if (params?._id) {
      if (currProduct) {
        setFormData(currProduct);
      }
    }
  }, [currProduct, params?._id]);

  const handleFormData = useCallback((key: string, value: string) => {
    setFormData(prev => ({...prev, [key]: value}));
  }, []);

  const handleUpdate = useCallback(() => {
    dispatch(updateProduct(formData));
  }, [dispatch, formData]);

  const handleAdd = useCallback(() => {
    dispatch(addProduct(formData));
  }, [dispatch, formData]);

  const handleSubmit = () => {
    if (!formData?.sku) {
      Alert.alert('Product SKU required');
      return;
    }

    if (params?._id) {
      if (!areSameObjects(currProduct, formData)) {
        handleUpdate();
      }
    } else {
      handleAdd();
    }
    navigation.goBack();
  };

  return {formData, handleFormData, handleSubmit, params};
};
