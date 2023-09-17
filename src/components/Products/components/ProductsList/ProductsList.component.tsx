import React, { FC, Fragment, useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { fetchProducts } from '@/redux/slices/Products/Products.thunk';
import { ProductsItem } from '@/components/Products/components/ProductsItem/ProductsItem.component';
import { useDispatch, useSelector } from '@/redux/hooks';
import { ProductsListProps } from '@/components/Products/Products.types';

export const ProductsList: FC<ProductsListProps> = ({
  productsLimit,
  category,
}) => {
  const { data, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchProducts({
        limitValue: productsLimit ? productsLimit : undefined,
        queryCondition: {
          fieldPath: 'category',
          opStr: '==',
          value: category,
        },
      })
    );
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
    <>
      {data.map(({ id, img, name, price, totalQuantity, category }) => (
        <Fragment key={name}>
          <ProductsItem
            id={id}
            img={img}
            name={name}
            price={price}
            totalQuantity={totalQuantity}
            category={category}
          />
        </Fragment>
      ))}
    </>
  );
};
