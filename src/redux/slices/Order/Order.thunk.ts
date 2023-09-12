import { createAsyncThunk } from '@reduxjs/toolkit';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '@/firebase/firebaseConfig';
import { SaveOrderItem } from '@/redux/slices/Order/Order.types';

export const saveOrder = createAsyncThunk<
  void,
  { uid: string; order: SaveOrderItem }
>('order/saveOrders', async ({ uid, order }) => {
  try {
    const userRef = doc(firestore, 'users', uid);
    await updateDoc(userRef, { orders: arrayUnion(order) });
  } catch (error) {
    throw new Error('Error while fetching user data from Firestore.');
  }
});
