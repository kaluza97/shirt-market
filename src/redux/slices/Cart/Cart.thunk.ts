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

export const updateCartInDatabase = createAsyncThunk(
  'cart/updateCartInDatabase',
  async (cartItems: CartUpdatedItem[]) => {
    const productIds = cartItems.map((cartItem) => cartItem.id);
    const queryRef = query(
      collection(firestore, 'shirts'),
      where('id', 'in', productIds)
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

        const shirtRef: DocumentReference = doc.ref;
        updateDoc(shirtRef, { totalQuantity: quantitiesToUpdate });
      }
    });
  }
);
