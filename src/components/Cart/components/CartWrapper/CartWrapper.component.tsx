import React, { FC } from 'react';
import { useDispatch, useSelector } from '@/redux/hooks';
import { Button, Typography } from '@mui/material';
import { EmptyCartContainer, headerText } from '@/components/Cart/Cart.styles';
import Image from 'next/image';
import { CartItem } from '@/components/Cart/components/CartItem/CartItem.component';
import { calculateTotalCost } from '@/components/Cart/Cart.utils';
import { Divider } from '@mui/material';
import { updateCartInDatabase } from '@/redux/slices/Cart/Cart.thunk';
import { clearCart } from '@/redux/slices/Cart/Cart.slice';

export const CartWrapper: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const allProductsTotalCost = calculateTotalCost(cartItems);

  const handleProceedPayment = () => {
    dispatch(updateCartInDatabase(cartItems));
    dispatch(clearCart());
  };

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
          <Divider />
          {cartItems.map((item) => (
            <CartItem item={item} key={item.name} />
          ))}
          <Typography component="h3" sx={headerText}>
            Total cost: {allProductsTotalCost} $
          </Typography>
          <Button onClick={handleProceedPayment}>Proceed to Payment</Button>
        </>
      )}
    </>
  );
};
