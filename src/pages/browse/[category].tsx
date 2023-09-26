import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Layout } from '@/components/Layout/Layout.component';
import { ProductsList } from '@/components/Products/components/ProductsList/ProductsList.component';
import { categoryData, allCategories } from '@/data/category.data';
import { headerTitle } from '@/components/Order/Order.styles';
import { Typography } from '@mui/material';
import { CategoryQuery } from '@/redux/slices/Products/Products.types';

const CategoryDetailPage: FC = () => {
  const router = useRouter();
  const { category } = router.query;
  const [categoryQuery, setCategoryQuery] =
    useState<CategoryQuery>(allCategories);

  useEffect(() => {
    const matchingCategory = categoryData.find(
      (item) => item.name === category
    );

    if (matchingCategory) {
      setCategoryQuery(matchingCategory.categoryQuery);
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
    />
  );
};

export default CategoryDetailPage;
