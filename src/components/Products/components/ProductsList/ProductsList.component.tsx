import React, { FC, Suspense, useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { fetchProducts } from '@/redux/slices/Products/Products.thunk';
import { ProductsItem } from '@/components/Products/components/ProductsItem/ProductsItem.component';
import { useDispatch, useSelector } from '@/redux/hooks';

export const ProductsList: FC = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(8));
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
          <ProductsItem
            id={id}
            img={img}
            name={name}
            price={price}
            totalQuantity={totalQuantity}
          />
        </div>
      ))}
    </Suspense>
  );
};
