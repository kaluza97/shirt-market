import React, { FC } from 'react';
import { useSelector } from '@/redux/hooks';
import { CartItem } from '../CartItem/CartItem.component';

export const CartItemsList: FC = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <>
      {cartItems.map((item) => (
        <CartItem item={item} />
      ))}
    </>
  );
};
