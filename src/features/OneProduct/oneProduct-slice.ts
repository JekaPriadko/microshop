import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/features/store';
import { AxiosStatic } from 'axios';
import { IProduct } from '@/models/IProduct';
import { IStatusFetch } from '@/models/IStatusFetch';

interface ProductState {
  currentProduct: IProduct | null;
  status: IStatusFetch;
  error: string | null;
}
interface AsyncThunkExtraArgument {
  client: AxiosStatic;
}
export const loadOneProduct = createAsyncThunk<
  IProduct,
  number,
  {
    extra: AsyncThunkExtraArgument;
  }
>('@@product/getOneProduct', async (id, { extra: { client } }) => {
  const res = await client.get(`/products/${id}`);
  return res.data;
});

const initialState: ProductState = {
  currentProduct: null,
  status: 'idle',
  error: null,
};

const oneProductSlice = createSlice({
  name: '@@product',
  initialState,
  reducers: {
    clearOneProduct: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadOneProduct.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadOneProduct.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action?.error.code || 'ERR_BAD_REQUEST';
      })
      .addCase(loadOneProduct.fulfilled, (state, action) => {
        state.status = 'received';
        state.currentProduct = action.payload;
      });
  },
});

export const { clearOneProduct } = oneProductSlice.actions;
export const oneProductReducer = oneProductSlice.reducer;

// selectors
export const selectOneProduct = (state: RootState) => state.product;
