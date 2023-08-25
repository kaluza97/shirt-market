import { configureStore } from '@reduxjs/toolkit';
import shirtsReducer from '@/redux/slices/Products/ProductsSlice';
import cartReducer from '@/redux/slices/Cart/CartSlice';

export const store = configureStore({
  reducer: {
    shirts: shirtsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

