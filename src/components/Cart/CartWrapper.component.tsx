import React, { FC } from 'react';
import { CartItems } from './CartItems.component';
import { useSelector } from '@/redux/hooks';
import { Typography } from '@mui/material';

export const CartWrapper: FC = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <CartItems />
      )}
    </>
  );
};
