import { AxiosStatic } from 'axios';
import { RootState } from '@/features/store';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import { ICategory } from '@/models/ICategory';
import { IStatusFetch } from '@/models/IStatusFetch';

interface CategoriesListState {
  list: ICategory[];
  status: IStatusFetch;
  error: string | null;
}

interface AsyncThunkExtraArgument {
  client: AxiosStatic;
}

export const loadCategoriesList = createAsyncThunk<
  ICategory[],
  null,
  {
    extra: AsyncThunkExtraArgument;
  }
>('@@categoriesList/getCategories', async (_, { extra: { client } }) => {
  const res = await client.get(`/categories`);
  return res.data;
});

const initialState: CategoriesListState = {
  list: [],
  status: 'idle',
  error: null,
};

const categoriesListSlice = createSlice({
  name: '@@categoriesList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCategoriesList.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCategoriesList.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action?.error.code || 'ERR_BAD_REQUEST';
      })
      .addCase(loadCategoriesList.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload;
      });
  },
});

export const categoriesListReducer = categoriesListSlice.reducer;

// selectors
export const selectCategoriesListInfo = createSelector(
  [(state) => state.categoriesList],
  (categoriesList) => ({
    status: categoriesList.status,
    error: categoriesList.error,
    qty: categoriesList.list.length,
  })
);

export const selectCategoriesList = (state: RootState) =>
  state.categoriesList.list;
