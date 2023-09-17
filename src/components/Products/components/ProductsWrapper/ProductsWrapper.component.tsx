import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import {
  ProductsWrapperContainer,
  headerTitle,
  productContainer,
} from '@/components/Products/Products.styles';
import { ProductsList } from '@/components/Products/components/ProductsList/ProductsList.component';

export const ProductsWrapper: FC = () => (
  <ProductsWrapperContainer>
    <Typography component="h3" variant="h4" sx={headerTitle}>
      New bestsellers products
    </Typography>
    <Box sx={productContainer}>
      <ProductsList productsLimit={10} />
    </Box>
  </ProductsWrapperContainer>
);
