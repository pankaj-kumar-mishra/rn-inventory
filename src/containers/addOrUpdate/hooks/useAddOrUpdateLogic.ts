import {useNavigation, useRoute} from '@react-navigation/native';
import {useCallback, useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import uuid from 'react-native-uuid';
import {addProduct, updateProduct} from '../../../redux/reducers/productsSlice';
import {selectActiveProducts} from '../../../redux/selectors';
import {ProductModel} from '../../../utils';
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

  useEffect(() => {
    if (params?._id) {
      const currProduct = products.find(item => item._id === params._id);
      if (currProduct) {
        setFormData(currProduct);
      }
    }
  }, [params?._id, products]);

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
      handleUpdate();
    } else {
      handleAdd();
    }
    navigation.goBack();
  };

  return {formData, handleFormData, handleSubmit, params};
};
