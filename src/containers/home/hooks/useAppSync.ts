import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNetInfo} from '@react-native-community/netinfo';
import {
  selectActiveProducts,
  selectPendingRequests,
} from '../../../redux/selectors';
import {useIsFocused} from '@react-navigation/native';

export const useAppSync = () => {
  const netInfo = useNetInfo();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const pendingRequests = useSelector(selectPendingRequests);
  const products = useSelector(selectActiveProducts);

  useEffect(() => {
    if (
      products.length === 0 &&
      pendingRequests.length === 0 &&
      netInfo.isConnected
    ) {
      // FETCH PRODUCTS DATA
      console.log('🚀 ~ file: useHomeLogic.ts:20 ~ products:', products);
    }
  }, [products, netInfo.isConnected, pendingRequests.length]);

  useEffect(() => {
    if (isFocused && pendingRequests?.length > 0 && netInfo.isConnected) {
      // POST PRODUCTS DATA and FETCH PRODUCTS DATA
      console.log(
        '🚀 ~ file: useHomeLogic.ts:20 ~ pendingRequests:',
        pendingRequests,
      );
    }
  }, [isFocused, netInfo.isConnected, pendingRequests]);

  return null;
};
