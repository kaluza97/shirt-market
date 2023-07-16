import styled from '@emotion/styled';
import { Breakpoints, Colors, FontFamily, FontSizes } from '@/styles/variables';
import { SxProps } from '@mui/material';

export const AuthContainer = styled.div`
width: 100%;
height: 100%;
@media (min-width: ${Breakpoints.desktop}) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
`;

export const FormContainer = styled.div`
width: 100%;
@media (min-width: ${Breakpoints.desktop}) {
  display: flex;
  width: 40vw;
  height: 100vh;
}
`;

export const FormContent = styled.div`
  text-align: center;
   padding: 50px 30px 0 30px;

  @media (min-width: ${Breakpoints.tablet}) {
    padding: 50px 100px 0 100px;
  }
  @media (min-width: ${Breakpoints.desktop}) {
    box-shadow: ${Colors.shadow} 0px 5px 15px;
  }
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
