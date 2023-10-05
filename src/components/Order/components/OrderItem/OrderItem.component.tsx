import React, { FC } from 'react';
import { Card, Typography } from '@mui/material';
import {
  DescriptionContainer,
  OrderItemsContainer,
  orderBox,
} from '@/components/Order/Order.styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { OrderItemProps } from '@/components/Order/Order.types';
import { normalTextBlack } from '@/styles/global.styles';

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
              <Typography component="h5" sx={normalTextBlack}>
                Name: {name}
              </Typography>
              <Typography component="h5" sx={normalTextBlack}>
                Quantity:
              </Typography>
              <Typography component="h5" sx={normalTextBlack}>
                Item Price: {price} $
              </Typography>
              {Object.entries(quantities).map(
                ([size, quantity]) =>
                  quantity > 0 && (
                    <Typography key={size} component="h5" sx={normalTextBlack}>
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
