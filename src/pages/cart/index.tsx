import { CartWrapper } from '@/components/Cart/components/CartWrapper/CartWrapper.component';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import React, { FC } from 'react';

const Cart: FC = () => (
    <Layout
        header={<NavigationMenu />}
        content={<CartWrapper />}
    />
);

export default Cart;
