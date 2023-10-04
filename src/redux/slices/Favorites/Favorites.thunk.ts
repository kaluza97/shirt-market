import { firestore } from '@/firebase/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { FavoriteItem } from '@/redux/slices/Favorites/Favorites.types';

export const fetchFavorites = createAsyncThunk<
  Array<FavoriteItem> | null,
  string
>('favorites/fetchFavorites', async (uid) => {
  try {
    const dataRef = doc(firestore, 'favorites', uid);
    const snapshot = await getDoc(dataRef);

    if (snapshot.exists()) {
      const favoritesData = snapshot.data();
      return favoritesData.favorites;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Error while fetching user data from Firestore.');
  }
});

export const saveFavorite = createAsyncThunk<
  void,
  { uid: string; favorite: FavoriteItem }
>('favorites/saveFavorite', async ({ uid, favorite }, { dispatch }) => {
  try {
    const dataRef = doc(firestore, 'favorites', uid);
    await updateDoc(dataRef, { favorites: arrayUnion(favorite) });
    dispatch(fetchFavorites(uid));
  } catch (error) {
    throw new Error('Error while fetching user data from Firestore.');
  }
});

export const removeFavorite = createAsyncThunk<
  void,
  { uid: string; favorite: FavoriteItem }
>('favorites/removeFavorite', async ({ uid, favorite }, { dispatch }) => {
  try {
    const dataRef = doc(firestore, 'favorites', uid);
    await updateDoc(dataRef, { favorites: arrayRemove(favorite) });
    dispatch(fetchFavorites(uid));
  } catch (error) {
    throw new Error('Error while removing favorite from Firestore.');
  }
});
