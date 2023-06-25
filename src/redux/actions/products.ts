import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL, PATHS, ProductsRequestModel} from '../../utils';

export const fetchProducts = createAsyncThunk('fetch/Products', async () => {
  try {
    const response = await fetch(`${BASE_URL}${PATHS.product}`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
});

export const syncAppProducts = createAsyncThunk(
  'sync/Products',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (reqData: ProductsRequestModel, {dispatch}) => {
    try {
      //   TODO: Create Axios service and handle API calls
      const data = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqData),
      };

      const response = await fetch(`${BASE_URL}${PATHS.productSync}`, data);
      const result = await response.json();
      //   NOTE: To fetch the Products after update in DB,
      //    we need to uncomment below line and {dispatch} get from thunkApi (line 17)
      //   dispatch(fetchProducts());
      return result;
    } catch (error) {
      throw error;
    }
  },
);
