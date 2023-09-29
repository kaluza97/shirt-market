import React, { FC, useEffect } from 'react';
import { resetPaymentStatus } from '@/redux/slices/Cart/Cart.slice';
import { CartWrapper } from '@/components/Cart/components/CartWrapper/CartWrapper.component';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { useDispatch } from '@/redux/hooks';
import { useRouter } from 'next/router';
import { ExtendedFooter } from '@/components/Footer/components/ExtendedFooter/ExtendedFooter.component';

const Cart: FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const cleanup = () => {
      dispatch(resetPaymentStatus());
    };
    router.events.on('routeChangeStart', cleanup);
  }, []);

  return (
    <Layout
      header={<NavigationMenu />}
      content={<CartWrapper />}
      footer={<ExtendedFooter />}
    />
  );
};

export default Cart;
