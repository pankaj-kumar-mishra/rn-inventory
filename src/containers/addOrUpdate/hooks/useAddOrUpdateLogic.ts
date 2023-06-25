import {useNavigation, useRoute} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {AddOrUpdateNavigationProps, AddOrUpdateRouteProps} from '../types';

const initialData = {
  name: 'name_',
  price: '10',
  image: 'http://placeimg.com/640/480',
  quantity: '100',
  sku: 'sku_',
};
export const useAddOrUpdateLogic = () => {
  const navigation = useNavigation<AddOrUpdateNavigationProps>();
  const {params} = useRoute<AddOrUpdateRouteProps>();

  const [formData, setFormData] = useState(() => initialData);

  const handleFormData = useCallback((key: string, value: string) => {
    setFormData(prev => ({...prev, [key]: value}));
  }, []);

  const handleSubmit = () => {
    if (formData.sku) {
      navigation.goBack();
    }
  };

  return {formData, handleFormData, handleSubmit, params};
};
