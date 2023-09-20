import styled from '@emotion/styled';
import {
  Breakpoints,
  Colors,
  FontFamily,
  FontSizes,
  FontWeights,
} from '@/styles/variables';
import { SxProps } from '@mui/material';
import Link from 'next/link';

export const BasicFooterContainer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  color: ${Colors.black};
  text-align: center;
  align-items: center;
`;

export const ExtendedFooterContainer = styled.footer`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${Colors.primary};
  @media (min-width: ${Breakpoints.tablet}),
    @media (min-width: ${Breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ExtendedFooterSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const LinkStyled = styled(Link)`
  text-align: center;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const basicFooterText: SxProps = {
  fontFamily: FontFamily.sans,
  fontSize: FontSizes.middle,
  color: Colors.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Colors.primary,
  padding: '1rem 0',
  [`@media screen and (min-width: ${Breakpoints.tablet})`]: {
    padding: '1rem 0',
    backgroundColor: Colors.blackLight,
  },
  [`@media screen and (min-width: ${Breakpoints.desktop})`]: {
    padding: '2rem 0',
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

export const footerText: SxProps = {
  fontSize: FontSizes.large,
  fontWeight: FontWeights.normal,
  color: Colors.white,
  marginBottom: '1rem',
};

export const footerHeaderText: SxProps = {
  ...footerText,
  fontWeight: FontWeights.bold,
  marginBottom: '2rem',
};
