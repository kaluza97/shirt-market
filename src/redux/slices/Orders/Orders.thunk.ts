import { firestore } from '@/firebase/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { OrderItem, SaveOrderItem } from '@/redux/slices/Orders/Orders.types';

export const fetchOrders = createAsyncThunk<Array<OrderItem> | null, string>(
  'orders/fetchOrders',
  async (uid) => {
    try {
      const dataRef = doc(firestore, 'orders', uid);
      const snapshot = await getDoc(dataRef);

      if (snapshot.exists()) {
        const orderData = snapshot.data();
        return orderData.orders;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error('Error while fetching user data from Firestore.');
    }
  }
);

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
