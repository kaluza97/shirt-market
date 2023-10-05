import React, { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { OrderWrapper } from '@/components/Order/components/OrderWrapper/OrderWrapper.component';
import { Footer } from '@/components/Footer/components/Footer/Footer.component';

const OrderPage: FC = () => (
  <Layout
    header={<NavigationMenu />}
    content={<OrderWrapper />}
    footer={<Footer />}
  />
);

export default OrderPage;
