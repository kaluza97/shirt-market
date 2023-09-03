import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AddCartProps,
  CartType,
  Quantities,
  Size,
} from '@/redux/slices/Cart/Cart.types';

const initialState: CartType = {
  cart: [],
};

const initialQuantities: Quantities = {
  S: 0,
  M: 0,
  L: 0,
  XL: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddCartProps>) => {
      const { id, size, img, name, price } = action.payload;
      const existingCartItem = state.cart.find((item) => item.id === id);

      if (existingCartItem) {
        state.cart = state.cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantities: {
                  ...item.quantities,
                  [size]: item.quantities[size] + 1,
                },
              }
            : item
        );
      } else {
        const newCartItem = {
          id,
          img,
          name,
          price,
          quantities: {
            ...initialQuantities,
            [size]: 1,
          },
        };
        state.cart = [...state.cart, newCartItem];
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: number; size: Size }>
    ) => {
      const { id, size } = action.payload;
      const cartItem = state.cart.find((item) => item.id === id);
      if (cartItem && cartItem.quantities[size] > 0) {
        cartItem.quantities[size] = cartItem.quantities[size] - 1;
      }
      if (
        cartItem &&
        Object.values(cartItem.quantities).every((quantity) => quantity === 0)
      ) {
        state.cart = state.cart.filter((item) => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
