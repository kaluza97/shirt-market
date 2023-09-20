import React, { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { FavoritesWrapper } from '@/components/Favorites/FavoritesWrapper.component';
import { ExtendedFooter } from '@/components/Footer/components/ExtendedFooter/ExtendedFooter.component';

const FavoritesPage: FC = () => (
  <Layout
    header={<NavigationMenu />}
    content={<FavoritesWrapper />}
    footer={<ExtendedFooter />}
  />
);

export default FavoritesPage;
