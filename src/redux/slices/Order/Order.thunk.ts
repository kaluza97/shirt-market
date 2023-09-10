import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '@/firebase/firebaseConfig';
import { OrderItemType } from '@/redux/slices/Order/Order.types';

export const saveOrder = createAsyncThunk<
  void,
  { uid: string; order: OrderItemType[] }
>('order/saveOrders', async ({ uid, order }) => {
  try {
    const userRef = doc(firestore, 'users', uid);
    await setDoc(userRef, { orders: order }, { merge: true });

    console.log('Zamówienie zostało dodane pomyślnie!');
  } catch (error) {
    console.error('Błąd podczas dodawania zamówienia:', error);
    throw error;
  }
});
