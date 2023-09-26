import { Typography } from '@mui/material';
import { useSelector } from '@/redux/hooks';
import {
  TextBox,
  crossedOutText,
  highlightedText,
  redText,
} from '@/components/Products/Products.styles';

export const DisplayItemPrice = () => {
  const { data } = useSelector((state) => state.productById);

  if (!data) {
    return null;
  }

  return data.specialPrice ? (
    <TextBox>
      <Typography sx={crossedOutText}>{data.price} $</Typography>
      <Typography sx={redText}>{data.specialPrice} $</Typography>
    </TextBox>
  ) : (
    <Typography sx={highlightedText}>{data.price} $</Typography>
  );
};
