import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders } from './Orders.thunk';
import { OrderType } from './Orders.types';

const initialState: OrderType = {
  data: null,
  loading: false,
  error: false,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.data = action.payload || null;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default ordersSlice.reducer;
