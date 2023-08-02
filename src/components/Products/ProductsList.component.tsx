import React, { FC, Suspense, useEffect } from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress } from '@mui/material';
import {
  imgPrice,
  imgTitle,
  productBox,
} from '@/components/Products/ProductsList.styles';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShirtsDataAsync } from '@/redux/slices/ProductsThunk';


export const ProductsList: FC = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.shirts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShirtsDataAsync());
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }


  return (
    <Suspense fallback={<CircularProgress />}>
      {data?.map(({ img, name, price }) => (
        <Box sx={productBox} key={name}>
          <Image src={img} alt={name} width={200} height={250} priority />
          <Typography sx={imgTitle}>{name}</Typography>
          <Typography sx={imgPrice}>{price} $</Typography>
        </Box>
      ))}
    </Suspense>
  );
};
