import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import {
  ProductsWrapperContainer,
  productContainer,
} from '@/components/Products/Products.styles';
import { ProductsList } from '@/components/Products/components/ProductsList/ProductsList.component';
import { headerTextBlack } from '@/styles/global.styles';

export const ProductsWrapper: FC = () => (
  <ProductsWrapperContainer>
    <Typography component="h3" sx={headerTextBlack}>
      Our most recomended products
    </Typography>
    <Box sx={productContainer}>
      <ProductsList
        productsLimit={10}
        queryCondition={{
          fieldPath: 'category',
          opStr: '==',
          value: ['men', 'woman'],
        }}
      />
    </Box>
  </ProductsWrapperContainer>
);
