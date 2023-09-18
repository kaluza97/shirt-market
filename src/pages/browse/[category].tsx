import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Layout } from '@/components/Layout/Layout.component';
import { ProductsList } from '@/components/Products/components/ProductsList/ProductsList.component';
import { Categories } from '@/components/Products/Products.types';
import { categoryData } from '@/data/category.data';
import { headerTitle } from '@/components/Order/Order.styles';
import { Typography } from '@mui/material';

const CategoryDetailPage: FC = () => {
  const router = useRouter();
  const { category } = router.query;
  const findQueryConditionByCategory = (category: Categories) => {
    const matchingCategory = categoryData.find(
      (item) => item.name === category
    );
    return matchingCategory ? matchingCategory.queryCondition : null;
  };
  const queryCondition = category
    ? findQueryConditionByCategory(category as Categories)
    : null;

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
    />
  );
};

export default CategoryDetailPage;
