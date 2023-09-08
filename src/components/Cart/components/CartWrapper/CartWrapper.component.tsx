import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '@/redux/hooks';
import { Button, CircularProgress, Typography } from '@mui/material';
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
import { buyCartsProducts } from '@/redux/slices/Cart/Cart.thunk';
import { clearCart } from '@/redux/slices/Cart/Cart.slice';
import PaymentIcon from '@mui/icons-material/Payment';
import { CustomAlert } from '@/components/Message/components/CustomAlert/CustomAlert.component';

export const CartWrapper: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const paymentStatus = useSelector((state) => state.cart.paymentStatus);
  const allProductsTotalCost = calculateTotalCost(cartItems);

  const handleProceedPayment = () => {
    dispatch(buyCartsProducts(cartItems));
  };

  useEffect(() => {
    if (paymentStatus === 'success') {
      dispatch(clearCart());
    }
  }, [paymentStatus]);

  return (
    <CartContainer>
      {paymentStatus === 'loading' && <CircularProgress />}
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
            Proceed to Payment
          </Button>
        </>
      )}
    </CartContainer>
  );
};
