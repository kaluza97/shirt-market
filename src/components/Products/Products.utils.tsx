import { Typography } from '@mui/material';
import { TextBox, crossedOutText } from '@/components/Products/Products.styles';
import { FC } from 'react';
import { displayPriceOrSpecialPriceProps } from '@/components/Products/Products.types';
import { normalTextRed, normalTextBlack } from '@/styles/global.styles';

export const displayPriceOrSpecialPrice: FC<
  displayPriceOrSpecialPriceProps
> = ({ specialPrice, price }) => (
  <>
    {specialPrice ? (
      <TextBox>
        <Typography sx={crossedOutText}>{price} $</Typography>
        <Typography sx={normalTextRed}>{specialPrice} $</Typography>
      </TextBox>
    ) : (
      <Typography sx={normalTextBlack}>{price} $</Typography>
    )}
  </>
);
