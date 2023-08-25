import { ProductType, productSchema } from "@/components/Products/ProductsList.types";
import { firestore } from "@/firebase/firebaseConfig";
import { query, collection, getDocs, where } from "firebase/firestore";

export const fetchProductById = async (id: number): Promise<ProductType | null> => {
    const productsRef = collection(firestore, 'shirts');
    const queryRef = query(productsRef, where('id', '==', id));
    const snapshot = await getDocs(queryRef);

    if (!snapshot.empty) {
        const productData = snapshot.docs[0].data();
        const validatedProduct = productSchema.safeParse(productData);

        if (validatedProduct.success) {
            return validatedProduct.data;
        }
    }

    return null;
};
