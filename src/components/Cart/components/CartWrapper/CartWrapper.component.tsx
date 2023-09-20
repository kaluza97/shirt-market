import React, { FC, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from '@/redux/hooks';
import { Button, CircularProgress, Typography } from '@mui/material';
import {
  CartContainer,
  EmptyCartContainer,
} from '@/components/Cart/Cart.styles';
import Image from 'next/image';
import { CartItem } from '@/components/Cart/components/CartItem/CartItem.component';
import { calculateTotalCost } from '@/components/Cart/Cart.utils';
import { Divider } from '@mui/material';
import { buyCartsProducts } from '@/redux/slices/Cart/Cart.thunk';
import { clearCart } from '@/redux/slices/Cart/Cart.slice';
import PaymentIcon from '@mui/icons-material/Payment';
import { CustomAlert } from '@/components/Message/components/CustomAlert/CustomAlert.component';
import { saveOrder } from '@/redux/slices/Orders/update/Orders.thunk';
import { AuthContext } from '@/context/Auth.context';
import { SaveOrderItem } from '@/redux/slices/Orders/update/Orders.types';
import { Timestamp } from 'firebase/firestore';
import { boldText, button, headerTextBlack } from '@/styles/global.styles';

export const CartWrapper: FC = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const { isPaymentSuccessful, loading, error } = useSelector(
    (state) => state.cart
  );
  const allProductsTotalCost = calculateTotalCost(cartItems);

  const handleAddOrder = () => {
    const purchasedItem: SaveOrderItem = {
      orderDate: Timestamp.fromDate(new Date()),
      totalPrice: allProductsTotalCost,
      items: cartItems,
    };

    if (user?.uid) {
      dispatch(saveOrder({ uid: user.uid, order: purchasedItem }));
    }
  };

  const handleProceedPayment = () => {
    dispatch(buyCartsProducts(cartItems));
    handleAddOrder();
  };

  useEffect(() => {
    if (isPaymentSuccessful) {
      dispatch(clearCart());
    }
  }, [isPaymentSuccessful, dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <CartContainer>
      {isPaymentSuccessful && (
        <CustomAlert
          alertType="success"
          alertMessage="Congratulations! Your payment was successful."
        />
      )}
      {error && (
        <CustomAlert
          alertType="error"
          alertMessage="Error processing your payment. Please contact customer support."
        />
      )}
      {cartItems.length === 0 ? (
        <EmptyCartContainer>
          <Typography sx={headerTextBlack}>Your cart is empty.</Typography>
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
          <Typography component="h3" sx={headerTextBlack}>
            Your Cart Items:
          </Typography>
          <Divider />
          {cartItems.map((item) => (
            <CartItem item={item} key={item.name} />
          ))}
          <Typography component="h3" sx={boldText}>
            Total cost: {allProductsTotalCost} $
          </Typography>
          <Button
            variant="contained"
            onClick={handleProceedPayment}
            sx={button}
            endIcon={<PaymentIcon />}
          >
            Proceed to Payment
          </Button>
        </>
      )}
    </CartContainer>
  );
};
