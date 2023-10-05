import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from '@/redux/slices/Products/Products.slice';
import cartReducer from '@/redux/slices/Cart/Cart.slice';
import productByIdReducer from '@/redux/slices/Product/Product.slice';
import ordersReducer from '@/redux/slices/Orders/Orders.slice';
import favoritesReducer from '@/redux/slices/Favorites/Favorites.slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  products: productsReducer,
  productById: productByIdReducer,
  cart: cartReducer,
  orders: ordersReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
