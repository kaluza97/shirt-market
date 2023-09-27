import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Layout } from '@/components/Layout/Layout.component';
import { ProductsList } from '@/components/Products/components/ProductsList/ProductsList.component';
import { allCategories } from '@/data/category.data';
import { Typography } from '@mui/material';
import { CategoryQuery } from '@/redux/slices/Products/Products.types';
import { matchingCategory } from '@/components/Category/Category.utils';
import { Footer } from '@/components/Footer/Footer.component';
import { FlexContainer, headerTextBlack } from '@/styles/global.styles';

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
        <FlexContainer>
          <Typography component="h3" sx={headerTextBlack}>
            You are in the category: {category}
          </Typography>
          <ProductsList categoryQuery={categoryQuery} />
        </FlexContainer>
      }
      footer={<Footer />}
    />
  );
};

export default CategoryDetailPage;
