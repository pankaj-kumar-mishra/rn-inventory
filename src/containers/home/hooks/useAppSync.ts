import {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNetInfo} from '@react-native-community/netinfo';
import {useIsFocused} from '@react-navigation/native';
import {
  selectActiveProducts,
  selectPendingRequests,
  selectProductsRequestStatus,
} from '../../../redux/selectors';
import {fetchProducts, syncAppProducts} from '../../../redux/actions';

export const useAppSync = () => {
  const netInfo = useNetInfo();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const pendingRequests = useSelector(selectPendingRequests);
  const products = useSelector(selectActiveProducts);
  const {loading, error} = useSelector(selectProductsRequestStatus);

  const handleFetchProducts = useCallback(() => {
    if (netInfo.isConnected) {
      //   @ts-ignore TODO: Type actions fix
      dispatch(fetchProducts());
    }
  }, [dispatch, netInfo.isConnected]);

  useEffect(() => {
    if (products.length === 0 && pendingRequests.length === 0) {
      handleFetchProducts();
    }
  }, [
    products.length,
    netInfo.isConnected,
    pendingRequests.length,
    handleFetchProducts,
  ]);

  useEffect(() => {
    if (isFocused && pendingRequests?.length > 0 && netInfo.isConnected) {
      //   @ts-ignore TODO: Type actions fix
      dispatch(syncAppProducts(pendingRequests));
    }
  }, [dispatch, isFocused, netInfo.isConnected, pendingRequests]);

  return {loading, error, handleFetchProducts};
};
