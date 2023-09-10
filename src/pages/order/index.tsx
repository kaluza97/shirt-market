import React, { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { OrderWrapper } from '@/components/Order/components/OrderWrapper/OrderWrapper.component';

const OrderPage: FC = () => (
  <Layout header={<NavigationMenu />} content={<OrderWrapper />} />
);

export default OrderPage;
