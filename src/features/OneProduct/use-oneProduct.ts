import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect } from 'react';

import {
  clearOneProduct,
  loadOneProduct,
  selectOneProduct,
} from '@/features/OneProduct/oneProduct-slice';

export const useOneProduct = (idProduct: number) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectOneProduct);

  useEffect(() => {
    dispatch(loadOneProduct(idProduct));

    return () => {
      dispatch(clearOneProduct());
    };
  }, [idProduct, dispatch]);

  return product;
};
