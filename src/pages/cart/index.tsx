import { CartWrapper } from '@/components/Cart/CartWrapper.component';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import React, { FC } from 'react';

const Cart: FC = () => (
  <Layout
    header={<NavigationMenu />}
    content={
      <>
        <h2>Cart</h2>
        <CartWrapper />
      </>
    }
  />
);

export default Cart;
