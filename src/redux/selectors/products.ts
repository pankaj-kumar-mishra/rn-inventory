import {createSelector} from '@reduxjs/toolkit';
import {ProductModel} from '../../utils';

// @ts-ignore TODO: use state as StoreModel
export const selectStoreProducts = state => state.products;

export const selectProducts = createSelector(selectStoreProducts, item =>
  Array.isArray(item.products)
    ? item.products.map((product: ProductModel) => ({
        ...product,
        price: product.price?.toString() ?? '',
        quantity: product.quantity?.toString() ?? '',
      }))
    : [],
);

export const selectActiveProducts = createSelector(
  selectProducts,
  (products: ProductModel[]) => products.filter(item => item._id && item.sku),
);

export const selectPendingRequests = createSelector(
  selectStoreProducts,
  item => item.pendingRequests,
);

export const selectProductsRequestStatus = createSelector(
  selectStoreProducts,
  item => ({loading: item.loading, error: item.error}),
);
