import React, { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Category } from '@/components/Category/Category.component';

const BrowsePage: FC = () => (
  <Layout header={<NavigationMenu />} content={<Category />} />
);

export default BrowsePage;
