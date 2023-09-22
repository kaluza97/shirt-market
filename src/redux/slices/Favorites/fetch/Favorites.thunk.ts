import { firestore } from '@/firebase/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';

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
