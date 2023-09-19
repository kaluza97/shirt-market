import React, { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { FavoritesWrapper } from '@/components/Favorites/FavoritesWrapper.component';

const FavoritesPage: FC = () => (
  <Layout header={<NavigationMenu />} content={<FavoritesWrapper />} />
);

export default FavoritesPage;
