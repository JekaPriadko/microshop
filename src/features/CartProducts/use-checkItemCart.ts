import { useAppSelector } from '@/hooks/redux';

import { IProduct } from '@/models/IProduct';

import {
  selectCartItem,
} from '@/features/CartProducts/cartProducts-slice';

export const useCheckItemCart = (product: IProduct) => {
  const isInCart = useAppSelector(state => selectCartItem(state, product));

  return isInCart;
};
