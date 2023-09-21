import { normalTextBlack } from '@/styles/global.styles';
import { Breakpoints, Colors } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import Image from 'next/image';

export const ProductsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductDetailContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: ${Breakpoints.tablet}),
    @media (min-width: ${Breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (min-width: ${Breakpoints.tablet}),
    @media (min-width: ${Breakpoints.desktop}) {
    padding-right: 10rem;
  }
`;

export const PanelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${Breakpoints.tablet}),
    @media (min-width: ${Breakpoints.desktop}) {
    padding: 0 2rem;
    min-width: 350px;
  }
`;

export const DetailImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 40rem;
  height: 55rem;
  @media (min-width: ${Breakpoints.tablet}),
    @media (min-width: ${Breakpoints.desktop}) {
    max-width: 42rem;
  }
`;

export const TextBox = styled.div`
  display: inline-flex;
  justify-content: center;
`;

export const productContainer: SxProps = {
  display: 'flex',
  width: '100%',
  overflow: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

export const AccordionContainer = styled.div`
  max-width: 70rem;
`;

export const FormContainer = styled.div`
  width: 100%;
`;

export const ProductImageWrapper = styled.div`
  position: relative;
`;

export const Img = styled(Image)`
  margin: 0 0 0.5rem 0;
  cursor: pointer;
`;

export const favoriteIconButton: SxProps = {
  position: 'absolute',
  bottom: '1.5rem',
  right: '0.5rem',
  color: Colors.primary,
  backgroundColor: Colors.white,
};

export const favoriteIcon: SxProps = {
  width: '2.5rem',
  height: '2.5rem',
};

export const productBox: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  padding: '2rem',
};

export const crossedOutText: SxProps = {
  ...normalTextBlack,
  textDecoration: 'line-through',
  marginRight: '0.5rem',
};

export const accordion: SxProps = {
  margin: '1rem 0',
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
