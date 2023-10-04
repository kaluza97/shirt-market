import { createSlice } from '@reduxjs/toolkit';
import { FavoritesState } from '@/redux/slices/Favorites/Favorites.types';
import { fetchFavorites } from '@/redux/slices/Favorites/Favorites.thunk';

const initialState: FavoritesState = {
  data: null,
  loading: false,
  error: false,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.data = action.payload || null;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default favoritesSlice.reducer;
