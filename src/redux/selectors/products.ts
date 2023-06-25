import {createSelector} from '@reduxjs/toolkit';
import {ProductModel} from '../../utils';

export const selectStoreProducts = state => state.products;

export const selectProducts = createSelector(
  selectStoreProducts,
  item => item.products,
);

export const selectActiveProducts = createSelector(
  selectProducts,
  (products: ProductModel[]) => products.filter(item => item._id && item.sku),
);
