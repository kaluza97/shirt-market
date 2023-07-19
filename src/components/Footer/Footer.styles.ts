import styled from '@emotion/styled';
import { Breakpoints, Colors, FontFamily, FontSizes } from '@/styles/variables';
import { SxProps } from '@mui/material';

export const FooterContainer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  color: ${Colors.black};
  text-align: center;
  align-items: center;
`;

export const Link = styled.a`
  text-align: center;
`;

export const textFooter: SxProps = {
  fontFamily: `${FontFamily.main}`,
  fontSize: `${FontSizes.middle}`,
  color: `${Colors.white}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: `${Colors.primary}`,
  padding: '1rem 0',
  [`@media screen and (min-width: ${Breakpoints.tablet})`]: {
    padding: '1rem 0',
    backgroundColor: `${Colors.secondary}`,
  },
  [`@media screen and (min-width: ${Breakpoints.desktop})`]: {
    padding: '2rem 0',
    backgroundColor: `${Colors.primary}`,
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
