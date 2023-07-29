import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import {
  ProductsListContainer,
  headerTitle,
  productContainer,
} from '@/components/Products/ProductsList.styles';
import { ProductsList } from '@/components/Products/ProductsList.component';

export const ProductsWrapper: FC = () => {

  return (
    <ProductsListContainer>
      <Typography component="h3" variant="h3" sx={headerTitle}>
        New bestsellers products
      </Typography>
      <Box sx={productContainer}>
        <ProductsList />
      </Box>
    </ProductsListContainer>
  );
};
