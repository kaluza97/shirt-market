import { firestore } from '@/firebase/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  query,
  where,
  getDocs,
  DocumentReference,
  writeBatch,
} from 'firebase/firestore';
import { CartUpdatedItem } from '@/redux/slices/Cart/Cart.types';

export const updateCartInDatabase = createAsyncThunk(
  'cart/updateCartInDatabase',
  async (cartItems: CartUpdatedItem[], { rejectWithValue }) => {
    try {
      const productIds = cartItems.map((cartItem) => cartItem.id);
      const queryRef = query(
        collection(firestore, 'shirts'),
        where('id', 'in', productIds)
      );
      const snapshot = await getDocs(queryRef);
      const batch = writeBatch(firestore);
      snapshot.forEach((doc) => {
        const productId = doc.data().id;
        const cartItem = cartItems.find((item) => item.id === productId);

        if (cartItem) {
          const quantitiesInCart = cartItem.quantities;
          const shirtRef: DocumentReference = doc.ref;

          batch.update(shirtRef, {
            totalQuantity: {
              S: doc.data().totalQuantity.S - quantitiesInCart.S,
              M: doc.data().totalQuantity.M - quantitiesInCart.M,
              L: doc.data().totalQuantity.L - quantitiesInCart.L,
              XL: doc.data().totalQuantity.XL - quantitiesInCart.XL,
            },
          });
        }
      });

      await batch.commit();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
