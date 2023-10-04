import React, { FC } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { useSelector } from '@/redux/hooks';
import { CustomAlert } from '@/components/Message/components/CustomAlert/CustomAlert.component';
import { headerTitle } from '@/components/Order/Order.styles';
import Image from 'next/image';
import { FavoritesWrapperContainer } from '@/components/Favorites/Favorites.styles';
import { ProductsItem } from '@/components/Products/components/ProductsItem/ProductsItem.component';
import { calculateIsFavorite } from '@/components/Favorites/Favorites.utils';

export const Favorites: FC = () => {
  const { data, loading, error } = useSelector((state) => state.favorites);
  const favorites = useSelector((state) => state.favorites.data);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <CustomAlert
        alertType="error"
        alertMessage="The operation has failed. Please contact technical support."
      />
    );
  }

  return (
    <FavoritesWrapperContainer>
      {data && data.length > 0 ? (
        <>
          <Typography variant="h5" sx={headerTitle}>
            Your favorites:
          </Typography>
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
        </>
      ) : (
        <>
          <Typography variant="h5" sx={headerTitle}>
            No favorite products
          </Typography>
          <Image
            src={`/assets/shirtWithBrokenHeart.jpg`}
            alt="shirt with broken heart"
            width={120}
            height={120}
            priority
          />
        </>
      )}
    </FavoritesWrapperContainer>
  );
};
