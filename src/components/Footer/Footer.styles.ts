import styled from '@emotion/styled';
import {
  Breakpoints,
  Colors,
  FontFamily,
  FontSizes,
  MediaForTabletAndDesktop,
} from '@/styles/variables';
import { SxProps } from '@mui/material';
import Link from 'next/link';

export const FooterContainer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  color: ${Colors.black};
  text-align: center;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  text-align: center;
`;

export const textFooter: SxProps = {
  fontFamily: FontFamily.sans,
  fontSize: FontSizes.middle,
  color: Colors.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Colors.primary,
  paddingTop: '1rem',
  paddingBottom: '1rem',
  [MediaForTabletAndDesktop]: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    backgroundColor: Colors.primary,
  },
};

export const Svg = styled.svg`
  position: relative;
  top: 0.5rem;
  fill: ${Colors.primary};
  @media (min-width: ${Breakpoints.tablet}) {
    display: none;
  }
`;
