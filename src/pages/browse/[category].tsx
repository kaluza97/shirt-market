import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Layout } from '@/components/Layout/Layout.component';
import { ProductsList } from '@/components/Products/components/ProductsList/ProductsList.component';
import { Categories } from '@/components/Products/Products.types';

const CategoryDetailPage: FC = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Layout
      header={<NavigationMenu />}
      content={<ProductsList category={category as Categories} />}
    />
  );
};

export default CategoryDetailPage;
