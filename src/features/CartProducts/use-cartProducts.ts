import { useAppSelector } from '@/hooks/redux';

import {
  selectCart,
  selectCartCount,
} from '@/features/CartProducts/cartProducts-slice';

export const useCart = () => {
  const cart = useAppSelector(selectCart);
  const cartCount = useAppSelector(selectCartCount);

  return { cart, cartCount };
};
