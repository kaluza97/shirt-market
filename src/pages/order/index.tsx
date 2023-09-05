import React, { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Order } from '@/components/Order/Order.component';

const OrderPage: FC = () => (
  <Layout header={<NavigationMenu />} content={<Order />} />
);

export default OrderPage;
