import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect } from 'react';

import {
  loadCategoriesList,
  selectCategoriesList,
  selectCategoriesListInfo,
} from '@/features/CategoriesList/categoriesList-slice';

export const useCategoriesList = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategoriesList);
  const { status, error, qty } = useAppSelector(selectCategoriesListInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCategoriesList(null));
    }
  }, [qty, dispatch]);

  return { categories, categoriesInfo: { status, error, qty } };
};
