import React, { FC, Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress } from '@mui/material';
import {
  imgPrice,
  imgTitle,
  productBox,
} from '@/components/Products/ProductsList.styles';
import { ProductType } from '@/components/Products/ProductsList.types';
import { fetchShirtsData } from '@/api/fetchProducts';

export const ProductsList: FC = () => {
  const [shirtsData, setShirtsData] = useState<Array<ProductType>>([]);

  useEffect(() => {
    const fetchShirts = async () => {
      const data = await fetchShirtsData();
      setShirtsData(data);
    };
    fetchShirts();
  }, []);

  return (
    <Suspense fallback={<CircularProgress />}>
      {shirtsData?.map(({ img, name, price }) => (
        <Box sx={productBox} key={name}>
          <Image src={img} alt={name} width={200} height={250} priority />
          <Typography sx={imgTitle}>{name}</Typography>
          <Typography sx={imgPrice}>{price} $</Typography>
        </Box>
      ))}
    </Suspense>
  );
};
