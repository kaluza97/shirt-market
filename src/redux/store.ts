import { configureStore } from '@reduxjs/toolkit';
import shirtsReducer from '@/redux/slices/Products/Products.slice';
import cartReducer from '@/redux/slices/Cart/Cart.slice';
import productByIdReducer from '@/redux/slices/Product/Product.slice';

export const store = configureStore({
  reducer: {
    shirts: shirtsReducer,
    productById: productByIdReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
