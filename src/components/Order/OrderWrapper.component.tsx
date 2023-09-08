import React, { FC, useContext, useEffect } from 'react';
import { Card, CircularProgress, Typography } from '@mui/material';
import { CustomAlert } from '@/components/Message/components/CustomAlert/CustomAlert.component';
import { AuthContext } from '@/context/Auth.context';
import { useDispatch, useSelector } from '@/redux/hooks';
import { fetchOrders } from '@/redux/slices/Orders/Orders.thunk';
import {
  DescriptionContainer,
  OrderContainer,
  OrderItemsContainer,
  descriptionText,
  headerTitle,
  orderBox,
} from '@/components/Order/Order.styles';
import Image from 'next/image';

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
    <OrderContainer>
      <Typography variant="h5" sx={headerTitle}>
        Your orders:
      </Typography>
      {data?.map(({ items, isActive, totalPrice }, index) => (
        <React.Fragment key={index}>
          <Typography variant="h5" sx={descriptionText}>
            IsActive: {isActive ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="h5" sx={descriptionText}>
            Total Price: {totalPrice} $
          </Typography>
          {items.map(({ id, name, img, price, quantity }) => (
            <Card key={id} sx={orderBox}>
              <OrderItemsContainer>
                <Image src={img} alt={name} width={110} height={150} priority />
                <DescriptionContainer>
                  <Typography variant="h5" sx={descriptionText}>
                    Name: {name}
                  </Typography>
                  <Typography variant="h5" sx={descriptionText}>
                    Quantity:
                  </Typography>
                  {Object.keys(quantity)
                    .filter(
                      (size) => quantity[size as keyof typeof quantity] > 0
                    )
                    .map((size, sizeIndex) => {
                      const quantityValue: number =
                        quantity[size as keyof typeof quantity];
                      return (
                        <React.Fragment key={sizeIndex}>
                          <Typography variant="h5" sx={descriptionText}>
                            {size}: {quantityValue}
                          </Typography>
                        </React.Fragment>
                      );
                    })}
                  <Typography variant="h5" sx={descriptionText}>
                    Item Price: {price} $
                  </Typography>
                  <Typography variant="h5" sx={descriptionText}>
                    Order Date: 23.08.2012
                  </Typography>
                </DescriptionContainer>
              </OrderItemsContainer>
            </Card>
          ))}
        </React.Fragment>
      ))}
    </OrderContainer>
  );
};
