import { useAppDispatch } from '@/hooks/redux';
import { ICategory } from '@/models/ICategory';

import { setActiveCategory } from '@/features/ProductsFilter/productsFilter-slice';

export const setCategory = () => {
  const dispatch = useAppDispatch();

  const handleCategory = (category: ICategory) => {
    dispatch(setActiveCategory(category || null));
  };

  return [handleCategory];
};
