import {createSlice} from '@reduxjs/toolkit';
import {ProductModel} from '../../utils';

interface ProductsState {
  loading: boolean;
  products: ProductModel[];
  error: string;
}

const initialState = {
  loading: false,
  products: [],
  error: '',
} as ProductsState;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {},
    addProduct(state, action) {
      state.products = [action.payload, ...state.products];
    },
    updateProduct(state, action) {
      state.products = state.products.map(item =>
        item._id === action.payload._id ? action.payload : item,
      );
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        item => item._id !== action.payload,
      );
    },
  },
});

export const {setProducts, addProduct, updateProduct, deleteProduct} =
  productsSlice.actions;
export default productsSlice.reducer;
