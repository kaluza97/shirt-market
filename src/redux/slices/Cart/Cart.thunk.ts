import { firestore } from '@/firebase/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  query,
  where,
  getDocs,
  DocumentReference,
  updateDoc,
} from 'firebase/firestore';
import { CartUpdatedItem } from '@/redux/slices/Cart/Cart.types';

export const buyCartsProducts = createAsyncThunk(
  'cart/buyCartsProducts',
  async (cartItems: Array<CartUpdatedItem>, { rejectWithValue }) => {
    try {
      const productsIds = cartItems.map((cartItem) => cartItem.id);
      const queryRef = query(
        collection(firestore, 'shirts'),
        where('id', 'in', productsIds)
      );
      const snapshot = await getDocs(queryRef);
      snapshot.forEach((doc) => {
        const productId = doc.data().id;
        const cartItem = cartItems.find((item) => item.id === productId);

        if (cartItem) {
          const quantitiesInCart = cartItem.quantities;
          const quantitiesToUpdate = {
            S: doc.data().totalQuantity.S - quantitiesInCart.S,
            M: doc.data().totalQuantity.M - quantitiesInCart.M,
            L: doc.data().totalQuantity.L - quantitiesInCart.L,
            XL: doc.data().totalQuantity.XL - quantitiesInCart.XL,
          };

          const productsRef: DocumentReference = doc.ref;
          updateDoc(productsRef, { totalQuantity: quantitiesToUpdate });
        }
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
