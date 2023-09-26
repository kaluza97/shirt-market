import React, { FC, useContext } from 'react';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import {
  Img,
  ProductImageWrapper,
  TextBox,
  crossedOutText,
  favoriteIcon,
  favoriteIconButton,
  imageText,
  productBox,
  redText,
} from '@/components/Products/Products.styles';
import { useRouter } from 'next/router';
import { ProductType } from '@/components/Products/Products.types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from '@/redux/hooks';
import { AuthContext } from '@/context/Auth.context';
import {
  fetchFavorites,
  removeFavorite,
  saveFavorite,
} from '@/redux/slices/Favorites/Favorites.thunk';

export const ProductsItem: FC<ProductType> = ({
  id,
  img,
  name,
  price,
  specialPrice,
}) => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const favorites = useSelector((state) => state.favorites.data);
  const isFavorite = favorites?.includes(id);

  const handleProductClick = () => {
    push(`/products/${id}`);
  };

  const handleFavoriteClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (user) {
      isFavorite
        ? dispatch(removeFavorite({ uid: user.uid, productId: id }))
        : dispatch(saveFavorite({ uid: user.uid, productId: id }));
    }
  };

  return (
    <Box sx={productBox} onClick={handleProductClick}>
      <ProductImageWrapper>
        <Img src={img} alt={name} width={250} height={350} priority />

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
      </ProductImageWrapper>
      <Typography sx={imageText}>{name}</Typography>
      {specialPrice ? (
        <TextBox>
          <Typography sx={crossedOutText}>{price} $</Typography>
          <Typography sx={redText}>{specialPrice} $</Typography>
        </TextBox>
      ) : (
        <Typography sx={imageText}>{price} $</Typography>
      )}
    </Box>
  );
};
