import { Colors, FontFamily, FontSizes } from '@/styles/variables';
import { SxProps } from '@mui/material';

export const carousel: SxProps = {
  borderRadius: '0',
};


export const carouselContainer: SxProps = {
  textAlign: 'center',
  backgroundColor: Colors.primary,
  color: Colors.white,
  padding: '1.5rem',
  height: '8rem',
  borderRadius: '0',
};

export const carouselNameText: SxProps = {
  fontSize: FontSizes.large,
  fontWeight: 'bold',
  marginBottom: '0.5rem',
};

export const carouselDescriptionText: SxProps = {
  fontSize: FontSizes.middle,
  fontFamily: FontFamily.main,

};
