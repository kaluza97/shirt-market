import React, { FC, Fragment, useContext, useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { AuthContext } from '@/context/Auth.context';
import { useDispatch, useSelector } from '@/redux/hooks';
import { fetchOrders } from '@/redux/slices/Orders/Orders.thunk';
import { CustomAlert } from '@/components/Message/components/CustomAlert/CustomAlert.component';
import { OrderItem } from '@/components/Order/components/OrderItem/OrderItem.component';
import {
  FlexContainer,
  headerTextBlack,
  normalTextBlack,
} from '@/styles/global.styles';

export const OrderWrapper: FC = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (user) {
      dispatch(fetchOrders(user.uid));
    }
  }, [dispatch, user]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <CustomAlert
        alertType="error"
        alertMessage="The operation has failed. Please contact technical support."
      />
    );
  }

  if (!data) {
    return null;
  }

  return (
    <FlexContainer>
      <Typography component="h5" sx={headerTextBlack}>
        Your orders:
      </Typography>
      {data?.map(({ items, totalPrice, orderDate }) => (
        <Fragment key={orderDate}>
          <Typography variant="h5" sx={normalTextBlack}>
            Total Price: {totalPrice} $
          </Typography>
          <Typography variant="h5" sx={normalTextBlack}>
            Order Date: {new Date(orderDate).toLocaleString()}
          </Typography>
          <OrderItem items={items} />
        </Fragment>
      ))}
    </FlexContainer>
  );
};
