import styled from '@emotion/styled';
import {
  Breakpoints,
  Colors,
  FontFamily,
  FontSizes,
  FontWeights,
} from '@/styles/variables';
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
  height: 100vh;
  overflow: hidden;
  @media (min-width: ${Breakpoints.desktop}) {
    display: flex;
    width: 50%;
  }
`;

export const FormContent = styled.div`
  text-align: center;
  padding: 5rem 3rem 0 3rem;

  @media (min-width: ${Breakpoints.tablet}) {
    padding: 5rem 10rem 0 10rem;
  }
  @media (min-width: ${Breakpoints.desktop}) {
    box-shadow: ${Colors.shadow} 0 0.5rem 1.5rem;
  }
`;

export const tabPanel: SxProps = {
  color: `${Colors.blackLight}`,
  boxShadow: `0 0.4rem 0.4rem -0.2rem ${Colors.shadow}`,
  marginBottom: '3rem',
  marginTop: '5rem',
};

export const tabItem: SxProps = {
  fontSize: `${FontSizes.middle}`,
  fontWeight: `${FontWeights.bold}`,
};

export const logoText: SxProps = {
  fontFamily: `${FontFamily.pacifico}`,
  marginTop: '0.5rem',
  color: `${Colors.blackLight}`,
  fontWeight: `${FontWeights.bold}`,
};
