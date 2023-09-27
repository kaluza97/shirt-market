import {
  ProductType,
  productsListSchema,
} from '@/components/Products/Products.types';
import { firestore } from '@/firebase/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { query, collection, getDocs, limit, where } from 'firebase/firestore';
import { FetchProductsArgs } from '@/redux/slices/Products/Products.types';

export const fetchProducts = createAsyncThunk<
  Array<ProductType>,
  FetchProductsArgs
>(
  'products/fetchProducts',
  async ({ limitValue, categoryQuery }: FetchProductsArgs) => {
    let dataRef = query(
      collection(firestore, 'shirts'),
      limit(limitValue ? limitValue : 1000)
    );

    categoryQuery.forEach((condition) => {
      dataRef = query(
        dataRef,
        where(condition.fieldPath, condition.opStr, condition.value)
      );
    });

    const snapshot = await getDocs(dataRef);
    const data = snapshot.docs.map((doc) => doc.data());
    const validatedData = productsListSchema.safeParse(data);

    if (!validatedData.success) {
      throw new Error('Error in data retrieved from Firestore');
    }
    return validatedData.data;
  }
);
