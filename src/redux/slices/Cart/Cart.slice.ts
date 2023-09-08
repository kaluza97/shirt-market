import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AddCartProps,
  CartType,
  Quantities,
  Size,
} from '@/redux/slices/Cart/Cart.types';
import { buyCartsProducts } from '@/redux/slices/Cart/Cart.thunk';

const initialState: CartType = {
  cart: [],
  lastItemToDelete: null,
  paymentStatus: null,
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
      state.paymentStatus = null;
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
      state.lastItemToDelete = null;
    },
    openConfirmModal: (
      state,
      action: PayloadAction<{ id: number; size: Size }>
    ) => {
      state.lastItemToDelete = action.payload;
    },
    closeConfirmModal: (state) => {
      state.lastItemToDelete = null;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buyCartsProducts.pending, (state) => {
        state.paymentStatus = 'loading';
      })
      .addCase(buyCartsProducts.fulfilled, (state) => {
        state.paymentStatus = 'success';
      })
      .addCase(buyCartsProducts.rejected, (state) => {
        state.paymentStatus = 'error';
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  openConfirmModal,
  closeConfirmModal,
} = cartSlice.actions;
export default cartSlice.reducer;
