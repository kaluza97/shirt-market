import { createSlice } from '@reduxjs/toolkit';
import { OrderState } from '@/redux/slices/Orders/Orders.types';
import { fetchOrders } from '@/redux/slices/Orders/Orders.thunk';

const initialState: OrderState = {
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
