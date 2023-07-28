import { Colors, FontFamily, FontSizes } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';

export const ProductsListContainer = styled.div`
  padding: 1rem;
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
  fontFamily: FontFamily.main,
  fontWeight: 'bold',
  color: Colors.text,
};

export const headerTitle: SxProps = {
  fontFamily: FontFamily.main,
  fontWeight: 'bold',
  color: Colors.text,
  marginBottom: '2rem',
};

export const imgPrice: SxProps = {
  fontSize: FontSizes.small,
  fontFamily: FontFamily.main,
  color: Colors.text,
};
