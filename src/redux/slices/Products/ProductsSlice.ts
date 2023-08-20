import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '@/components/Products/ProductsList.types';
import { fetchShirtsDataAsync } from '@/redux/slices/Products/ProductsThunk';
import { ShirtsState } from './ProductSlice.interface';

const initialState: ShirtsState = {
    id: 0,
    data: [],
    loading: false,
    error: false,
};

const shirtsSlice = createSlice({
    name: 'shirts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchShirtsDataAsync.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchShirtsDataAsync.fulfilled, (state, action: PayloadAction<Array<ProductType>>) => {
                state.data = action.payload;
                state.loading = false;
                state.error = false;
            })
            .addCase(fetchShirtsDataAsync.rejected, (state) => {
                state.loading = false;
                state.error = false;
            });
    },
});

export default shirtsSlice.reducer;