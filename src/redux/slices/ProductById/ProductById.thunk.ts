import { ProductType, productSchema } from '@/components/Products/Products.types';
import { firestore } from '@/firebase/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const fetchProductById = createAsyncThunk(
    'shirts/fetchProductById',
    async (id: number): Promise<ProductType> => {
        const dataRef = collection(firestore, 'shirts');
        const queryRef = query(dataRef, where('id', '==', id));
        const snapshot = await getDocs(queryRef);
        if (!snapshot.empty) {
            const productData = snapshot.docs[0].data();
            const validatedData = productSchema.safeParse(productData);

            if (validatedData.success) {
                return validatedData.data;
            }
        }
        throw new Error('Error in data retrieved from Firestore');
    }
);
