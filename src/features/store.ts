import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { themeReducer } from '@/features/ThemeSwitcher/theme-slice';
import { productsListReducer } from '@/features/ProductsList/productsList-slice';
import { oneProductReducer } from '@/features/OneProduct/oneProduct-slice';
import { productsFilterReducer } from '@/features/ProductsFilter/productsFilter-slice';
import { categoriesListReducer } from '@/features/CategoriesList/categoriesList-slice';
import { cartReducer } from '@/features/CartProducts/cartProducts-slice';


import clientAxios from '@/api/https';

const rootReducers = combineReducers({
  theme: themeReducer,
  products: productsListReducer,
  product: oneProductReducer,
  productsFilter: productsFilterReducer,
  categoriesList: categoriesListReducer,
  cart: cartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
    devTools: true,
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware({
        thunk: {
          extraArgument: {
            client: clientAxios(),
          },
        },
        serializableCheck: false,
      }),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
