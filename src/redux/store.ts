import { configureStore } from '@reduxjs/toolkit';
import shirtsReducer from '@/redux/slices/ProductsSlice';

export const store = configureStore({
  reducer: {
    shirts: shirtsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
