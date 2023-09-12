import React, { FC } from 'react';
import { Card, Typography } from '@mui/material';
import {
  DescriptionContainer,
  OrderItemsContainer,
  descriptionText,
  orderBox,
} from '@/components/Order/Order.styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { OrderItemProps } from '@/components/Order/Order.types';

export const OrderItem: FC<OrderItemProps> = ({ items }) => {
  const { push } = useRouter();

  const handleRedirectToDetail = (id: number) => {
    push(`/products/${id}`);
  };

  return (
    <>
      {items.map(({ id, name, img, price, quantities }) => (
        <Card key={id} sx={orderBox} onClick={() => handleRedirectToDetail(id)}>
          <OrderItemsContainer>
            <Image src={img} alt={name} width={110} height={150} priority />
            <DescriptionContainer>
              <Typography variant="h5" sx={descriptionText}>
                Name: {name}
              </Typography>
              <Typography variant="h5" sx={descriptionText}>
                Quantity:
              </Typography>
              <Typography variant="h5" sx={descriptionText}>
                Item Price: {price} $
              </Typography>
              {Object.entries(quantities).map(
                ([size, quantity]) =>
                  quantity > 0 && (
                    <Typography key={size} variant="h5" sx={descriptionText}>
                      Size {size}: {quantity}
                    </Typography>
                  )
              )}
            </DescriptionContainer>
          </OrderItemsContainer>
        </Card>
      ))}
    </>
  );
};
