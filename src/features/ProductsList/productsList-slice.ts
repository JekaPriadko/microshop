import { AxiosStatic } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/features/store';
import { createSelector } from 'reselect';

import { IProduct } from '@/models/IProduct';
import { IStatusFetch } from '@/models/IStatusFetch';
import { IProductsFilters } from '@/models/IProductsFilters';
import { buildUrl } from '@/utils/common';

interface ProductsState {
  list: IProduct[];
  status: IStatusFetch;
  error: string | null;
}

interface AsyncThunkExtraArgument {
  client: AxiosStatic;
}

export const loadProductsList = createAsyncThunk<
  IProduct[],
  IProductsFilters,
  {
    extra: AsyncThunkExtraArgument;
  }
>('@@products/getProducts', async (filters, { extra: { client } }) => {
  const urlProducts = `/products`;
  const query = filters ? buildUrl(filters) : ``;

  const res = await client.get(`${urlProducts}${query}`);
  return res.data;
});

const initialState: ProductsState = {
  list: [],
  status: 'idle',
  error: null,
};

const productListSlice = createSlice({
  name: '@@products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProductsList.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadProductsList.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action?.error.code || 'ERR_BAD_REQUEST';
      })
      .addCase(loadProductsList.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload;
      });
  },
});

export const productsListReducer = productListSlice.reducer;

// selectors
export const selectProductsListInfo = createSelector(
  [(state) => state.products],
  (products) => ({
    status: products.status,
    error: products.error,
    qty: products.list.length,
  })
);

export const selectProductsList = (state: RootState) => state.products.list;
