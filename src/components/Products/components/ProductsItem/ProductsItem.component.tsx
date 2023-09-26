import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import {
  Img,
  imageText,
  productBox,
} from '@/components/Products/Products.styles';
import { useRouter } from 'next/router';
import { ProductType } from '@/components/Products/Products.types';

export const ProductsItem: FC<ProductType> = ({ id, img, name, price }) => {
  const { push } = useRouter();

  const handleProductClick = () => {
    push(`/products/${id}`);
  };
  return (
    <Box sx={productBox} onClick={handleProductClick}>
      <Img src={img} alt={name} width={250} height={350} priority />
      <Typography sx={imageText}>{name}</Typography>
      <Typography sx={imageText}>{price} $</Typography>
    </Box>
  );
};
