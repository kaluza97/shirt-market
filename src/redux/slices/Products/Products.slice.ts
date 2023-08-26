import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '@/components/Products/Products.types';
import { fetchProducts } from '@/redux/slices/Products/Products.thunk';
import { ShirtType } from '@/redux/slices/Products/Product.types';

const initialState: ShirtType = {
  data: [],
  loading: false,
  error: false,
};

const productsSlice = createSlice({
  name: 'shirts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Array<ProductType>>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = false;
        }
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default productsSlice.reducer;
