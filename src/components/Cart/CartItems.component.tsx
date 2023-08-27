import React, { FC } from 'react';
import { Typography, Button, IconButton } from '@mui/material';
import { removeFromCart } from '@/redux/slices/Cart/Cart.slice';
import { useDispatch, useSelector } from '@/redux/hooks';
import { Size } from '@/redux/slices/Cart/Cart.types';
import Image from 'next/image';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export const CartItems: FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart);


    const handleRemoveFromCart = (id: number, size: Size) => {
        dispatch(removeFromCart({ id, size }));
    };

    return (
        <div>
            <Typography variant="h6" component="h4">
                Cart Items:
            </Typography>
            {cartItems.map((item) => (
                <div key={item.id}>
                    {Object.entries(item.quantities).map(([size, quantity]) => (
                        <>
                            {
                                quantity &&
                                <div key={item.name + item.id}>
                                    <p>{item.name}</p>
                                    <Image src={item.img} alt={item.name} width={130} height={160} priority />
                                    <p>
                                        Size: {size}, Quantity: {quantity}, Price: {item.price * quantity} $
                                    </p>
                                    <IconButton
                                        aria-label="add to shopping cart"
                                        onClick={() => handleRemoveFromCart(item.id, size as Size)}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                    <IconButton
                                        aria-label="remove from shopping cart"
                                        onClick={() => handleRemoveFromCart(item.id, size as Size)}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                </div>
                            }
                        </>
                    ))}
                </div>
            ))}
        </div>
    );
};
