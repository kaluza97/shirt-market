import React, { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { FavoritesWrapper } from '@/components/Favorites/FavoritesWrapper.component';
import { Footer } from '@/components/Footer/Footer.component';

const FavoritesPage: FC = () => (
  <Layout
    header={<NavigationMenu />}
    content={<FavoritesWrapper />}
    footer={<Footer />}
  />
);

export default FavoritesPage;
