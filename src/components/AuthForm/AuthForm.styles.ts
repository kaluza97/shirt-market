import styled from '@emotion/styled';
import { Colors, FontFamily, FontSizes } from '@/styles/variables';
import { SxProps } from '@mui/material';

export const AuthContainer = styled.div`
  height: 100vh;
`;

export const FormContent = styled.div`
text-align: center;
  padding: 50px 30px 0 30px;
`;

export const TabPanel: SxProps = {
  color: `${Colors.text}`,
  boxShadow: `0 4px 4px -2px ${Colors.shadow}`,
  marginBottom: '30px',
  marginTop: '50px',
};

export const TabItem: SxProps = {
  fontSize: `${FontSizes.middle}`,
  fontWeight: 'bold',
};

export const TextLogo: SxProps = {
  fontFamily: `${FontFamily.logoText}`,
  marginTop: '5px',
  color: `${Colors.text}`,
  fontWeight: 'bold',
};

export const TextNormal: SxProps = {
  color: `${Colors.white}`,
  textAlign: 'center',
};


export const Svg = styled.svg`
position: relative;
bottom: -5px;
left: 0;
`;

export const Footer = styled.footer`
width: 100%;
position: absolute;
bottom: 0;
left: 0;
color: ${Colors.black};
`;


export const TextFooter: SxProps = {
  color: `${Colors.white}`,
  textAlign: 'center',
  backgroundColor: `${Colors.primary}`,
  padding: '10px 0',
};