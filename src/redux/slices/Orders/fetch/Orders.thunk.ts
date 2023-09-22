import { firestore } from '@/firebase/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import { OrderItem } from '@/redux/slices/Orders/fetch/Orders.types';

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
