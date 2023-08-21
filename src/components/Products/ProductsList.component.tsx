import React, { FC, Suspense, useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchShirtsDataAsync } from '@/redux/slices/Products/ProductsThunk';
import ProductItem from '@/components/Products/ProductItem.component';


export const ProductsList: FC = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.shirts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchShirtsDataAsync());
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  if (!data) {
    return null;
  }

  return (
    <Suspense fallback={<CircularProgress />}>
      {data.map(({ id, img, name, price, totalQuantity }) => (
        <div key={name}>
          <ProductItem id={id} img={img} name={name} price={price} totalQuantity={totalQuantity} />
        </div>
      ))}
    </Suspense>
  );
};