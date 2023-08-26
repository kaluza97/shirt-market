import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartType, Quantities, Size } from '@/redux/slices/Cart/Cart.types';

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
    addToCart: (state, action: PayloadAction<{ id: number; size: Size }>) => {
      const { id, size } = action.payload;
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
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
