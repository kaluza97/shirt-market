import styled from '@emotion/styled';
import { Breakpoints, Colors, FontFamily } from '@/styles/variables';
import { SxProps } from '@mui/material';

export const FooterContainer = styled.footer`
width: 100%;
position: absolute;
bottom: 0;
left: 0;
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
};

export const Svg = styled.svg`
  position: relative;
  bottom: -5px;
  left: 0;
  fill: ${Colors.primary};
  @media (min-width: ${Breakpoints.tablet}) {
    display: none;
  }
`;