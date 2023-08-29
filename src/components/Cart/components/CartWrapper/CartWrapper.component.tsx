import React, { FC } from 'react';
import { useSelector } from '@/redux/hooks';
import { Typography } from '@mui/material';
import { EmptyCartContainer, headerText } from '../../Cart.styles';
import Image from 'next/image';
import { CartItem } from '../CartItem/CartItem.component';
import { calculateTotalCostForAllProducts } from '../../Cart.utils';

export const CartWrapper: FC = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const allProductsTotalCost = calculateTotalCostForAllProducts(cartItems);

  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCartContainer>
          <Typography sx={headerText}>Your cart is empty.</Typography>
          <Image
            src={`/assets/emptyCart.jpg`}
            alt="empty shopping cart"
            width={200}
            height={120}
            priority
          />
        </EmptyCartContainer>
      ) : (
        <>
          <Typography component="h3" sx={headerText}>
            Your Cart Items:
          </Typography>
          {cartItems.map((item) => (
            <CartItem item={item} key={item.name} />
          ))}
          <Typography component="h3" sx={headerText}>
            Total cost: {allProductsTotalCost} $
          </Typography>
        </>
      )}
    </>
  );
};
