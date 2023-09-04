import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from '@/redux/hooks';
import { Button, Typography } from '@mui/material';
import {
  CartContainer,
  EmptyCartContainer,
  confirmButton,
  headerText,
} from '@/components/Cart/Cart.styles';
import Image from 'next/image';
import { CartItem } from '@/components/Cart/components/CartItem/CartItem.component';
import { calculateTotalCost } from '@/components/Cart/Cart.utils';
import { Divider } from '@mui/material';
import { updateCartInDatabase } from '@/redux/slices/Cart/Cart.thunk';
import { clearCart } from '@/redux/slices/Cart/Cart.slice';
import PaymentIcon from '@mui/icons-material/Payment';
import { CustomAlert } from '@/components/Message/components/CustomAlert/CustomAlert.component';

export const CartWrapper: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const allProductsTotalCost = calculateTotalCost(cartItems);
  const [paymentStatus, setPaymentStatus] = useState<'success' | 'error' | ''>(
    ''
  );

  const handleProceedPayment = async () => {
    setPaymentStatus('');
    try {
      const resultAction = await dispatch(updateCartInDatabase(cartItems));
      if (updateCartInDatabase.fulfilled.match(resultAction)) {
        dispatch(updateCartInDatabase(cartItems));
        dispatch(clearCart());
        setPaymentStatus('success');
      }
    } catch (error) {
      setPaymentStatus('error');
    }
  };

  return (
    <CartContainer>
      {paymentStatus === 'success' && (
        <CustomAlert
          alertType="success"
          alertMessage="Congratulations! Your payment was successful."
        />
      )}
      {paymentStatus === 'error' && (
        <CustomAlert
          alertType="error"
          alertMessage="Error processing your payment. Please contact customer support."
        />
      )}
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
          <Button
            variant="contained"
            onClick={handleProceedPayment}
            sx={confirmButton}
            endIcon={<PaymentIcon />}
          >
            {' '}
            Proceed to Payment
          </Button>
        </>
      )}
    </CartContainer>
  );
};
