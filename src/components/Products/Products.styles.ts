import {
  Breakpoints,
  Colors,
  FontFamily,
  FontSizes,
  FontWeights,
} from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import Image from 'next/image';

export const ProductsWrapperContainer = styled.div`
  padding: 0 1rem 0 1rem;
  textalign: 'center';
`;

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

export const Img = styled(Image)`
  margin: 0 0 0.5rem 0;
  cursor: pointer;
`;

export const productBox: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  margin: '0.5rem',
};

export const imageText: SxProps = {
  fontSize: FontSizes.large,
  fontFamily: FontFamily.sans,
  fontWeight: FontWeights.bold,
  color: Colors.blackLight,
};

export const crossedOutText: SxProps = {
  ...imageText,
  textDecoration: 'line-through',
  marginRight: '0.5rem',
};

export const redText: SxProps = {
  ...imageText,
  color: Colors.red,
};

export const headerTitle: SxProps = {
  fontFamily: FontFamily.sans,
  fontWeight: FontWeights.bold,
  color: Colors.blackLight,
  textAlign: 'center',
  margin: '1rem',
};

export const headerText: SxProps = {
  fontSize: FontSizes.xl,
  fontFamily: FontFamily.sans,
  color: Colors.blackLight,
  fontWeight: FontWeights.bold,
  paddingBottom: '0.5rem',
  paddingTop: '0.5rem',
  textAlign: 'center',
  lineHeight: '2.8rem',
};

export const highlightedText: SxProps = {
  ...headerText,
  color: Colors.primary,
};

export const descriptionText: SxProps = {
  ...headerText,
  fontSize: FontSizes.middle,
  fontWeight: FontWeights.thin,
};

export const descriptionBoldText: SxProps = {
  ...descriptionText,
  fontWeight: FontWeights.bold,
};

export const accordion: SxProps = {
  margin: '1rem 0',
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
