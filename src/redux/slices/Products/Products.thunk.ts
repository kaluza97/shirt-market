import {
  ProductType,
  productsListSchema,
} from '@/components/Products/Products.types';
import { firestore } from '@/firebase/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { query, collection, getDocs } from 'firebase/firestore';

export const fetchProducts = createAsyncThunk<Array<ProductType>, void>(
  'shirts/fetchProducts',
  async () => {
    const dataRef = query(collection(firestore, 'shirts'));
    const snapshot = await getDocs(dataRef);
    const data = snapshot.docs.map((doc) => doc.data());
    const validatedData = productsListSchema.safeParse(data);
    if (!validatedData.success) {
      throw new Error('Error in data retrieved from Firestore');
    }
    return validatedData.data;
  }
);
