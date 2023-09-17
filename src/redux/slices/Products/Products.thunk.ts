import {
  Categories,
  ProductType,
  productsListSchema,
} from '@/components/Products/Products.types';
import { firestore } from '@/firebase/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  query,
  collection,
  getDocs,
  limit,
  where,
  FieldPath,
  WhereFilterOp,
} from 'firebase/firestore';

type FetchProductsArgs = {
  limitValue?: number;
  queryCondition: {
    fieldPath: string | FieldPath;
    opStr: WhereFilterOp;
    value: Categories;
  };
};

export const fetchProducts = createAsyncThunk<
  Array<ProductType>,
  FetchProductsArgs
>(
  'products/fetchProducts',
  async ({ limitValue, queryCondition }: FetchProductsArgs) => {
    const dataRef =
      queryCondition.value === 'all'
        ? query(
            collection(firestore, 'shirts'),
            limit(limitValue ? limitValue : 500)
          )
        : query(
            collection(firestore, 'shirts'),
            limit(limitValue ? limitValue : 500),
            where(
              queryCondition.fieldPath,
              queryCondition.opStr,
              queryCondition.value
            )
          );

    const snapshot = await getDocs(dataRef);
    const data = snapshot.docs.map((doc) => doc.data());
    const validatedData = productsListSchema.safeParse(data);

    if (!validatedData.success) {
      throw new Error('Error in data retrieved from Firestore');
    }
    return validatedData.data;
  }
);
