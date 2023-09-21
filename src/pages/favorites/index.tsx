import React, { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Favorites } from '@/components/Favorites/Favorites.component';
import { Footer } from '@/components/Footer/Footer.component';

const FavoritesPage: FC = () => (
  <Layout
    header={<NavigationMenu />}
    content={<Favorites />}
    footer={<Footer />}
  />
);

export default FavoritesPage;
