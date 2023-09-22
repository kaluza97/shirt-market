import { createAsyncThunk } from '@reduxjs/toolkit';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '@/firebase/firebaseConfig';
import { SaveOrderItem } from '@/redux/slices/Orders/update/Orders.types';

export const saveOrder = createAsyncThunk<
  void,
  { uid: string; order: SaveOrderItem }
>('order/saveOrder', async ({ uid, order }) => {
  try {
    const userRef = doc(firestore, 'orders', uid);
    await updateDoc(userRef, { orders: arrayUnion(order) });
  } catch (error) {
    throw new Error('Error while fetching user data from Firestore.');
  }
});
