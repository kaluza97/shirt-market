import React, { FC, Fragment, useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { fetchProducts } from '@/redux/slices/Products/Products.thunk';
import { ProductsItem } from '@/components/Products/components/ProductsItem/ProductsItem.component';
import { useDispatch, useSelector } from '@/redux/hooks';
import { ProductsListProps } from '@/components/Products/Products.types';
import { ProductsListContainer } from '@/components/Products/Products.styles';

export const ProductsList: FC<ProductsListProps> = ({
  productsLimit,
  queryCondition,
}) => {
  const { data, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchProducts({
        limitValue: productsLimit ? productsLimit : undefined,
        queryCondition: queryCondition ? queryCondition : undefined,
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
    <ProductsListContainer>
      {data.map(
        ({ id, img, name, price, specialPrice, totalQuantity, category }) => (
          <Fragment key={name}>
            <ProductsItem
              id={id}
              img={img}
              name={name}
              price={price}
              specialPrice={specialPrice}
              totalQuantity={totalQuantity}
              category={category}
            />
          </Fragment>
        )
      )}
    </ProductsListContainer>
  );
};
