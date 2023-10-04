import React, { FC, useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { fetchProducts } from '@/redux/slices/Products/Products.thunk';
import { ProductsItem } from '@/components/Products/components/ProductsItem/ProductsItem.component';
import { useDispatch, useSelector } from '@/redux/hooks';
import { ProductsListProps } from '@/components/Products/Products.types';
import { ProductsListContainer } from '@/components/Products/Products.styles';
import { calculateIsFavorite } from '@/components/Favorites/Favorites.utils';

export const ProductsList: FC<ProductsListProps> = ({ categoryQuery }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const favorites = useSelector((state) => state.favorites.data);

  useEffect(() => {
    dispatch(
      fetchProducts({
        categoryQuery: categoryQuery,
      })
    );
  }, [categoryQuery]);

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
      {data.map(({ id, img, name, price, specialPrice }) => (
        <ProductsItem
          key={name}
          id={id}
          img={img}
          name={name}
          price={price}
          specialPrice={specialPrice}
          isFavorite={calculateIsFavorite(id, favorites)}
        />
      ))}
    </ProductsListContainer>
  );
};
