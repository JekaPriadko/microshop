import { useAppSelector } from '@/hooks/redux';

import { getTotalPriceCart } from '@/features/CartProducts/cartProducts-slice';

export const useCartSumTotal = () => {
  const totalPriceCart = useAppSelector(getTotalPriceCart);

  return totalPriceCart;
};
