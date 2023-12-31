import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from '@/redux/slices/Product/Product.types';
import { fetchProductById } from '@/redux/slices/Product/Product.thunk';

const initialState: ProductState = {
  data: null,
  loading: false,
  error: false,
};

const productByIdSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default productByIdSlice.reducer;
