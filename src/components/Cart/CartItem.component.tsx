import React, { FC, useEffect, useState } from 'react';
import { ProductType } from "@/components/Products/ProductsList.types";
import { fetchProductById } from '@/api/fetchProductById';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


export const CartItem: FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    console.log(cartItems)

    return (
        <div>
            <p>hahah</p>
        </div>
    );
};

