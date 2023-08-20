import React, { FC, Suspense, useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { fetchShirtsDataAsync } from '@/redux/slices/Products/ProductsThunk';
import ProductItem from '@/components/Products/ProductItem.component';


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
      {data?.map(({ id, img, name, price }) => (
        <ProductItem key={name} id={id} img={img} name={name} price={price} />
      ))}
    </Suspense>
  );
};