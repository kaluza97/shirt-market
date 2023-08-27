import React, { FC } from 'react';
import { CartItems } from '../CartItems/CartItems.component';
import { useSelector } from '@/redux/hooks';
import { Typography } from '@mui/material';
import { EmptyCartContainer, headerText } from '../../Cart.styles';
import Image from 'next/image';

export const CartWrapper: FC = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCartContainer>
          <Typography sx={headerText}>Your cart is empty.</Typography>
          <Image
            src={`/assets/emptyCart.jpg`}
            alt='empty shopping cart'
            width={200}
            height={120}
            priority
          />
        </EmptyCartContainer>
      ) : (
        <CartItems />
      )}
    </>
  );
};
