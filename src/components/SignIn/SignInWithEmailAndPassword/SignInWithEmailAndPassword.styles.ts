import styled from '@emotion/styled';
import {
  Breakpoints,
  Colors,
  FontSizes,
  FontWeights,
  ResetAutofill,
} from '@/styles/variables';
import { SxProps } from '@mui/system';
import { normalText } from '@/styles/global.styles';

export const SignInFormWrapper = styled.div`
  @media (min-width: ${Breakpoints.desktop}) {
    width: 35rem;
  }
`;

export const inputText: SxProps = {
  ...normalText,
  paddingTop: '0.5rem',
  marginBottom: '2rem',
  'input:-webkit-autofill': {
    WebkitBoxShadow: ResetAutofill,
  },
};

export const paragraph: SxProps = {
  fontSize: FontSizes.middle,
  textAlign: 'left',
  fontWeight: FontWeights.bold,
  color: Colors.blackLight,
};
