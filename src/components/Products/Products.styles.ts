import { Colors, FontFamily, FontSizes, FontWeights } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';

export const ProductsListContainer = styled.div`
  padding: 0 1rem 0 1rem;
  textalign: 'center';
`;

export const ProductDetailContainer = styled.div`
  padding: 0 2rem;
  textalign: 'center';
`;

export const productContainer: SxProps = {
  display: 'flex',
  width: '100%',
  overflow: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

export const productBox: SxProps = {
  textAlign: 'center',
  margin: '0.5rem',
};

export const imgTitle: SxProps = {
  fontSize: FontSizes.small,
  fontFamily: FontFamily.sans,
  fontWeight: FontWeights.bold,
  color: Colors.blackLight,
};

export const headerTitle: SxProps = {
  fontFamily: FontFamily.sans,
  fontWeight: FontWeights.bold,
  color: Colors.blackLight,
  margin: '1rem',
};

export const imgPrice: SxProps = {
  fontSize: FontSizes.small,
  fontFamily: FontFamily.sans,
  color: Colors.blackLight,
};

export const headerText: SxProps = {
  fontSize: FontSizes.xl,
  fontFamily: FontFamily.sans,
  color: Colors.blackLight,
  fontWeight: FontWeights.bold,
  paddingBottom: '0.5rem',
  paddingTop: '0.5rem',
  textAlign: 'left',
};

export const descriptionText: SxProps = {
  ...headerText,
  fontSize: FontSizes.middle,
  fontWeight: FontWeights.thin,
  textAlign: 'center',
};

export const confirmButton: SxProps = {
  fontFamily: FontFamily.sans,
  fontSize: FontSizes.middle,
  fontWeight: FontWeights.bold,
  color: Colors.white,
  padding: '1rem',
  marginTop: '1rem',
  marginBottom: '1rem',
};

export const radioGroup: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '0.5rem',
};

export const radio: SxProps = {
  '& .MuiSvgIcon-root': {
    fontSize: 26,
  },
};
