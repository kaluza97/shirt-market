import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '@/firebase/firebaseConfig';
import { SaveOrderItem } from '@/redux/slices/Order/Order.types';

export const saveOrder = createAsyncThunk<
  void,
  { uid: string; order: Array<SaveOrderItem> }
>('order/saveOrders', async ({ uid, order }) => {
  try {
    const userRef = doc(firestore, 'users', uid);
    await setDoc(userRef, { orders: order }, { merge: true });
  } catch (error) {
    throw new Error('Error while fetching user data from Firestore.');
  }
});
