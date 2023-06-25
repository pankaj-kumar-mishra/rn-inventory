import {createSlice} from '@reduxjs/toolkit';
import {ProductModel, ProductsRequestModel} from '../../utils';
import {
  prepareDeleteRequestData,
  prepareInsertRequestData,
  prepareUpdateRequestData,
} from '../transformators';

interface ProductsState {
  loading: boolean;
  products: ProductModel[];
  pendingRequests: ProductsRequestModel;
  error: string;
}

const initialState = {
  loading: false,
  products: [],
  pendingRequests: [],
  error: '',
} as ProductsState;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    addProduct(state, action) {
      state.products = [action.payload, ...state.products];
      const data = prepareInsertRequestData(action.payload);
      // @ts-ignore: TODO: '[Symbol.iterator]()' method that returns an iterator
      state.pendingRequests = [...state.pendingRequests, data];
    },
    updateProduct(state, action) {
      state.products = state.products.map(item =>
        item._id === action.payload._id ? action.payload : item,
      );
      const data = prepareUpdateRequestData(action.payload);
      // @ts-ignore: TODO: '[Symbol.iterator]()' method that returns an iterator
      state.pendingRequests = [...state.pendingRequests, data];
    },
    deleteProduct(state, action) {
      const currSku = state.products.find(
        item => item._id === action.payload,
      )?.sku;
      state.products = state.products.filter(
        item => item._id !== action.payload,
      );
      if (currSku) {
        const data = prepareDeleteRequestData(currSku);
        // @ts-ignore: TODO: '[Symbol.iterator]()' method that returns an iterator
        state.pendingRequests = [...state.pendingRequests, data];
      }
    },
    resetRequests(state) {
      state.pendingRequests = [];
      state.loading = false;
    },
  },
});

export const {setProducts, addProduct, updateProduct, deleteProduct} =
  productsSlice.actions;
export default productsSlice.reducer;
