import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect } from 'react';

import {
  loadProductsList,
  selectProductsListInfo,
  selectProductsList,
} from '@/features/ProductsList/productsList-slice';

import { selectProductsFilter } from '@/features/ProductsFilter/productsFilter-slice';

export const useProductsList = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector(selectProductsFilter);

  const products = useAppSelector(selectProductsList);
  const { status, error, qty } = useAppSelector(selectProductsListInfo);

  useEffect(() => {
    dispatch(loadProductsList(filters));
  }, [filters, dispatch]);

  return {
    products,
    productsInfo: { status, error, qty },
  };
};
