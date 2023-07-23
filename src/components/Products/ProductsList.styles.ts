
import { Colors, FontFamily, FontSizes } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';

export const ProductsListContainer = styled.div`
padding: 1rem;
textAlign: 'center',

`;

export const productContainer: SxProps = {
  display: 'flex',
  width: '100%',
  overflow: 'scroll',
};

export const cardContainer: SxProps = {
};

export const card: SxProps = {
  margin: '0.5rem',
};

export const cardTitleText: SxProps = {
  fontSize: FontSizes.small,
  fontFamily: FontFamily.main,
  fontWeight: 'bold',
  color: Colors.text,

};

export const cardHeaderText: SxProps = {
  fontFamily: FontFamily.main,
  fontWeight: 'bold',
  color: Colors.text,
  marginBottom: '1rem',
};


export const cardText: SxProps = {
  fontSize: FontSizes.small,
  fontFamily: FontFamily.main,
  color: Colors.text,

};
