import React, { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Category } from '@/components/Category/Category.component';
import { ExtendedFooter } from '@/components/Footer/components/ExtendedFooter/ExtendedFooter.component';

const BrowsePage: FC = () => (
  <Layout
    header={<NavigationMenu />}
    content={<Category />}
    footer={<ExtendedFooter />}
  />
);

export default BrowsePage;
