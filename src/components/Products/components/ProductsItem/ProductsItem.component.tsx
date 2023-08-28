import React, { FC } from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import {
  imgPrice,
  imgTitle,
  productBox,
} from '@/components/Products/Products.styles';
import { useRouter } from 'next/router';
import { ProductType } from '@/components/Products/Products.types';

export const ProductsItem: FC<ProductType> = ({ id, img, name, price }) => {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/products/${id}`);
  };
  return (
    <Box sx={productBox} onClick={handleProductClick}>
      <Image src={img} alt={name} width={200} height={250} priority />
      <Typography sx={imgTitle}>{name}</Typography>
      <Typography sx={imgPrice}>{price} $</Typography>
    </Box>
  );
};

