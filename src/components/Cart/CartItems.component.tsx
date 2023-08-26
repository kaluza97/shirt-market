import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { removeFromCart } from '@/redux/slices/Cart/Cart.slice';
import { Size } from '@/redux/slices/Cart/Cart.types';
import { useDispatch, useSelector } from '@/redux/hooks';

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
    </div>
  );
};
