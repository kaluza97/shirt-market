import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Layout } from '@/components/Layout/Layout.component';
import { ProductsList } from '@/components/Products/components/ProductsList/ProductsList.component';
import { categoryData, allCategories } from '@/data/category.data';
import { headerTitle } from '@/components/Order/Order.styles';
import { Typography } from '@mui/material';
import { QueryCondition } from '@/redux/slices/Products/Products.types';
import { ExtendedFooter } from '@/components/Footer/components/ExtendedFooter/ExtendedFooter.component';

const CategoryDetailPage: FC = () => {
  const router = useRouter();
  const { category } = router.query;
  const [queryCondition, setQueryCondition] =
    useState<QueryCondition>(allCategories);

  useEffect(() => {
    const matchingCategory = categoryData.find(
      (item) => item.name === category
    );

    if (matchingCategory) {
      setQueryCondition(matchingCategory.queryCondition);
    } else {
      setQueryCondition(allCategories);
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
          <ProductsList queryCondition={queryCondition} />
        </>
      }
      footer={<ExtendedFooter />}
    />
  );
};

export default CategoryDetailPage;
