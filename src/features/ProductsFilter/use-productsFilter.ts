import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { ICategory } from '@/models/ICategory';

import {
  selectProductsFilter,
  setActiveCategory,
  setSearch,
  setRangeMaxPrice,
  setRangeMinPrice,
  clearFilters,
} from '@/features/ProductsFilter/productsFilter-slice';

export const useProductsFilter = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector(selectProductsFilter);

  const handleCategory = (category: ICategory) => {
    dispatch(setActiveCategory(category || null));
  };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value || null));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const handleRange = (e, type) => {
    if (type === 'max') {
      dispatch(setRangeMaxPrice(e.target.value || null));
    }
    if (type === 'min') {
      dispatch(setRangeMinPrice(e.target.value || null));
    }
  };

  return {
    filters,
    handleCategory,
    handleSearch,
    handleRange,
    handleClearFilters,
  };
};
