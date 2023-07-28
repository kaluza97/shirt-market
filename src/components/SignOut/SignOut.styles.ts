import { Colors, FontSizes } from '@/styles/variables';
import { SxProps } from '@mui/material';

export const logoutButton: SxProps = {
  fontSize: `${FontSizes.small}`,
  color: `${Colors.white}`,
  backgroundColor: `${Colors.primaryDark}`,
  '&:hover': {
    backgroundColor: `${Colors.primaryDark}`,
  },
};
