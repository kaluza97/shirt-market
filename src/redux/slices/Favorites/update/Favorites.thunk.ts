import { createAsyncThunk } from '@reduxjs/toolkit';
import { arrayUnion, arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '@/firebase/firebaseConfig';

export const saveFavorite = createAsyncThunk<
  void,
  { uid: string; productId: number }
>('favorites/saveFavorite', async ({ uid, productId }) => {
  try {
    const userRef = doc(firestore, 'users', uid);
    await updateDoc(userRef, { favorites: arrayUnion(productId) });
  } catch (error) {
    throw new Error('Error while fetching user data from Firestore.');
  }
});

export const removeFavorite = createAsyncThunk<
  void,
  { uid: string; productId: number }
>('favorites/removeFavorite', async ({ uid, productId }) => {
  try {
    const userRef = doc(firestore, 'users', uid);
    await updateDoc(userRef, { favorites: arrayRemove(productId) });
  } catch (error) {
    throw new Error('Error while removing favorite from Firestore.');
  }
});
