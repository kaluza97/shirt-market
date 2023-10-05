import { Colors, Breakpoints } from '@/styles/variables';
import { SxProps } from '@mui/material';

const commonStyles: SxProps = {
  height: '15rem',
  backgroundColor: Colors.primaryDark,
  [`@media (min-width: ${Breakpoints.tablet})`]: {
    height: '12rem',
  },
};

export const carousel: SxProps = {
  ...commonStyles,
};

export const paper: SxProps = {
  ...commonStyles,
  color: Colors.white,
  textAlign: 'center',
  padding: '1rem',
  borderRadius: '0',
};
