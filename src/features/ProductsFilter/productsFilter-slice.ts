import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/features/store';

import { IProductsFilters } from '@/models/IProductsFilters';

const initialState: IProductsFilters = {
  categoryId: null,
  title: null,
  price_min: null,
  price_max: null,
  offset: 0,
  limit: 15,
};

const productsFilterSlice = createSlice({
  name: '@@productsFilter',
  initialState,
  reducers: {
    setRangeMaxPrice: (state, action) => {
      state.price_max = action.payload;
    },
    setRangeMinPrice: (state, action) => {
      state.price_min = action.payload;
    },
    setActiveCategory: (state, action) => {
      state.categoryId = action.payload?.id;
    },
    setSearch: (state, action) => {
      state.title = action.payload;
    },
    clearFilters: () => initialState,
  },
  extraReducers: () => {},
});

export const productsFilterReducer = productsFilterSlice.reducer;

// actions
export const {
  setRangeMaxPrice,
  setRangeMinPrice,
  setActiveCategory,
  setSearch,
  clearFilters,
} = productsFilterSlice.actions;

// selectors
export const selectProductsFilter = (state: RootState) => state.productsFilter;
