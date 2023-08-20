import React, { FC, useEffect, useState } from 'react';
import { ProductType } from '../Products/ProductsList.types';
import { fetchProductById } from '@/api/fetchProductById';

interface CartItemProps {
    itemId: number;
}

const CartItem: FC<CartItemProps> = ({ itemId }) => {
    const [product, setProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await fetchProductById(itemId);
                setProduct(fetchedProduct);
            } catch (error) {
                alert(error)
            }
        };

        fetchProduct();
    }, [itemId]);

    if (!product) {
        return null;
    }

    return (
        <div>

        </div>
    );
};

export default CartItem;
