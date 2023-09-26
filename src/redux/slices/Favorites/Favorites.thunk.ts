import { firestore } from '@/firebase/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

export const fetchFavorites = createAsyncThunk<Array<number> | null, string>(
  'favorites/fetchFavorites',
  async (uid) => {
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
  }
);

export const saveFavorite = createAsyncThunk<
  void,
  { uid: string; productId: number }
>('favorites/saveFavorite', async ({ uid, productId }, { dispatch }) => {
  try {
    const userRef = doc(firestore, 'favorites', uid);
    await updateDoc(userRef, { favorites: arrayUnion(productId) });
    dispatch(fetchFavorites(uid));
  } catch (error) {
    throw new Error('Error while fetching user data from Firestore.');
  }
});

export const removeFavorite = createAsyncThunk<
  void,
  { uid: string; productId: number }
>('favorites/removeFavorite', async ({ uid, productId }, { dispatch }) => {
  try {
    const userRef = doc(firestore, 'favorites', uid);
    await updateDoc(userRef, { favorites: arrayRemove(productId) });
    dispatch(fetchFavorites(uid));
  } catch (error) {
    throw new Error('Error while removing favorite from Firestore.');
  }
});
