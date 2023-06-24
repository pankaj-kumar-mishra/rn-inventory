import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

type testUserType = {
  name: string;
};

interface TestState {
  count: number;

  loading: boolean;
  data: testUserType[];
  error: string;
}

const initialState = {
  count: 5,
  loading: false,
  data: [],
  error: '',
} as TestState;

export const getUsers = createAsyncThunk('get/users', async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
});

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  // pending || fulfilled || rejected
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, state => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, state => {
        state.loading = false;
        state.error = 'Something went wrong!!!';
      });
  },
});

export const {increment, decrement} = testSlice.actions;
export default testSlice.reducer;
