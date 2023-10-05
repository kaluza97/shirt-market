import React, { FC, useContext } from 'react';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import {
  Img,
  ImageWrapper,
  favoriteIcon,
  favoriteIconButton,
  productBox,
} from '@/components/Products/Products.styles';
import { useRouter } from 'next/router';
import { displayPriceOrSpecialPrice } from '@/components/Products/Products.utils';
import { useDispatch } from '@/redux/hooks';
import { AuthContext } from '@/context/Auth.context';
import {
  removeFavorite,
  saveFavorite,
} from '@/redux/slices/Favorites/Favorites.thunk';
import { FavoriteItem } from '@/redux/slices/Favorites/Favorites.types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ProductItemsProps } from '@/components/Products/Products.types';
import { normalTextBlack } from '@/styles/global.styles';

export const ProductsItem: FC<ProductItemsProps> = ({
  id,
  img,
  name,
  price,
  specialPrice,
  isFavorite,
}) => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);

  const handleProductClick = () => {
    push(`/products/${id}`);
  };

  const handleFavoriteClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    const favoriteItem: FavoriteItem = {
      id: id,
      img: img,
      name: name,
      price: specialPrice ? specialPrice : price,
    };

    if (user) {
      if (isFavorite) {
        dispatch(removeFavorite({ uid: user.uid, favorite: favoriteItem }));
      } else {
        dispatch(saveFavorite({ uid: user.uid, favorite: favoriteItem }));
      }
    }
  };

  return (
    <Box sx={productBox} onClick={handleProductClick}>
      <ImageWrapper>
        <Img src={img} alt={name} fill priority />
        <IconButton
          aria-label={isFavorite ? 'remove from favorites' : 'add to favorites'}
          sx={favoriteIconButton}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? (
            <FavoriteIcon sx={favoriteIcon} />
          ) : (
            <FavoriteBorderIcon sx={favoriteIcon} />
          )}
        </IconButton>
      </ImageWrapper>
      <Typography sx={normalTextBlack}>{name}</Typography>
      {displayPriceOrSpecialPrice({ price, specialPrice })}
    </Box>
  );
};
