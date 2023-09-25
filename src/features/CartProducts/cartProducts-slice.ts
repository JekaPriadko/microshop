import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '@/models/IProduct';
import { ICartItem } from '@/models/ICartItem';
import { RootState } from '@/features/store';

interface Cart {
  cart: ICartItem[];
}

const initialState: Cart = {
  cart: [],
};

const cartSlice = createSlice({
  name: '@@cart',
  initialState,
  reducers: {
    toggleItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ product }) => product.id === payload.id);

      if (!found) {
        newCart.push({ product: payload, quantity: 1 });
      } else {
        newCart = newCart.filter(({ product }) => product.id !== payload.id);
      }

      state.cart = newCart;
    },
    removeItemFromCart: (state, { payload }) => {
      let newCart = [...state.cart];
      newCart = newCart.filter(({ product }) => product.id !== payload.id);

      state.cart = newCart;
    },
    setQuantity: (state, { payload }) => {
      const newCart = [...state.cart];

      const index = newCart.findIndex(
        ({ product }) => product.id === payload.product.id
      );

      if (index !== -1) {
        newCart[index].quantity = payload.quantity;
      }

      state.cart = newCart;
    },
    clearCart: () => initialState,
  },
  extraReducers: () => {},
});

export const cartReducer = cartSlice.reducer;

// actions
export const { toggleItemToCart, removeItemFromCart, setQuantity, clearCart } =
  cartSlice.actions;

// selectors
export const selectCart = (state: RootState) => state.cart.cart;
export const selectCartCount = (state: RootState) => state.cart.cart.length;
export const selectCartItem = (state: RootState, product: IProduct) => {
  return state.cart.cart.some(
    (cartItem: ICartItem) => cartItem.product.id === product?.id
  );
};

export const getTotalPriceCart = (state: RootState) =>
  state.cart.cart.reduce((total: number, cartItem: ICartItem) => {
    const itemCost = cartItem.product.price * cartItem.quantity;
    return total + itemCost;
  }, 0);
