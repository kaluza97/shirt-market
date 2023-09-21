import {
  Colors,
  FontFamily,
  FontSizes,
  FontWeights,
  MediaForTabletAndDesktop,
} from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import Image from 'next/image';

export const ProductsWrapperContainer = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
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
  ${MediaForTabletAndDesktop} {
    flex-direction: row;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${MediaForTabletAndDesktop} {
    padding-right: 10rem;
  }
`;

export const PanelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  ${MediaForTabletAndDesktop} {
    width: 40%;
    padding-right: 2rem;
    padding-left: 2rem;
    min-width: 35rem;
  }
`;

export const DetailImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 40rem;
  height: 55rem;
  ${MediaForTabletAndDesktop} {
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
  margin-bottom: 0.5rem;
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
  marginTop: '1rem',
  marginBottom: '1rem',
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
