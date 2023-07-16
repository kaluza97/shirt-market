import styled from '@emotion/styled';
import { Breakpoints, Colors, FontFamily } from '@/styles/variables';
import { SxProps } from '@mui/material';

export const FooterContainer = styled.footer`
width: 100%;
position: absolute;
bottom: 0;
color: ${Colors.black};
`;

export const TextFooter: SxProps = {
  fontFamily: `${FontFamily.main}`,
  color: `${Colors.white}`,
  textAlign: 'center',
  backgroundColor: `${Colors.primary}`,
  padding: '10px 0',
  [`@media screen and (min-width: ${Breakpoints.tablet})`]: {
    padding: '20px 0',
    backgroundColor: `${Colors.secondary}`,
  },
  [`@media screen and (min-width: ${Breakpoints.desktop})`]: {
    padding: '20px 0',
    backgroundColor: `${Colors.primary}`,
  },
};

export const Svg = styled.svg`
  position: relative;
  bottom: -5px;
  fill: ${Colors.primary};
  @media (min-width: ${Breakpoints.tablet}) {
    display: none;
  }
`;