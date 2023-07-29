import { firestore } from '@/firebase/firebaseConfig';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { productsListSchema } from '@/components/Products/ProductsList.types';

export const fetchShirtsData = async () => {
  const limitDataRef = query(collection(firestore, 'shirts'), limit(5));
  const snapshot = await getDocs(limitDataRef);

  try {
    const data = snapshot.docs.map((doc) => doc.data());
    const validatedData = productsListSchema.safeParse(data);

    if (validatedData.success) {
      return validatedData.data;
    } else {
      throw new Error('Error in data retrieved from Firestore');
    }
  } catch (error) {
    return [];
  }
};
