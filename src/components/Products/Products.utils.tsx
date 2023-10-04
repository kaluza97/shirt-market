import { Typography } from '@mui/material';
import {
  TextBox,
  crossedOutText,
  redText,
  imageText,
} from '@/components/Products/Products.styles';
import { FC } from 'react';
import { displayPriceOrSpecialPriceProps } from '@/components/Products/Products.types';

export const displayPriceOrSpecialPrice: FC<
  displayPriceOrSpecialPriceProps
> = ({ specialPrice, price }) => (
  <>
    {specialPrice ? (
      <TextBox>
        <Typography sx={crossedOutText}>{price} $</Typography>
        <Typography sx={redText}>{specialPrice} $</Typography>
      </TextBox>
    ) : (
      <Typography sx={imageText}>{price} $</Typography>
    )}
  </>
);
