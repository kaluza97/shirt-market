import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Layout } from '@/components/Layout/Layout.component';
import { ProductsList } from '@/components/Products/components/ProductsList/ProductsList.component';
import { allCategories } from '@/data/category.data';
import { headerTitle } from '@/components/Order/Order.styles';
import { Typography } from '@mui/material';
import { ExtendedFooter } from '@/components/Footer/components/ExtendedFooter/ExtendedFooter.component';
import { CategoryQuery } from '@/redux/slices/Products/Products.types';
import { matchingCategory } from '@/components/Category/Category.utils';

const CategoryDetailPage: FC = () => {
  const router = useRouter();
  const { category } = router.query;
  const [categoryQuery, setCategoryQuery] =
    useState<Array<CategoryQuery>>(allCategories);

  useEffect(() => {
    const matchingCategoryData = matchingCategory(category);
    if (matchingCategoryData) {
      setCategoryQuery([matchingCategoryData.categoryQuery]);
    } else {
      setCategoryQuery(allCategories);
    }
  }, [category]);

  return (
    <Layout
      header={<NavigationMenu />}
      content={
        <>
          <Typography component="h3" variant="h4" sx={headerTitle}>
            You are in the category: {category}
          </Typography>
          <ProductsList categoryQuery={categoryQuery} />
        </>
      }
      footer={<ExtendedFooter />}
    />
  );
};

export default CategoryDetailPage;
