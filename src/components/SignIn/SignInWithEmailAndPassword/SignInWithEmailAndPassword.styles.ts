import styled from '@emotion/styled';
import { Breakpoints, Colors, FontSizes, ResetAutofill } from '@/styles/variables';
import { SxProps } from '@mui/system';

export const SignInFormWrapper = styled.div`
@media (min-width: ${Breakpoints.desktop}) {
  width: 350px;
}
`;

export const inputText: SxProps = {
  paddingTop: '5px',
  marginBottom: '20px',
  color: `${Colors.text}`,
  'input:-webkit-autofill': {
    WebkitBoxShadow: ResetAutofill,
  },
};

export const paragraph: SxProps = {
  fontSize: `${FontSizes.middle}`,
  textAlign: 'left',
  fontWeight: 'bold',
  color: `${Colors.text}`,
};

export const submitButton: SxProps = {
  fontSize: `${FontSizes.small}`,
  color: `${Colors.white}`,
  fontWeight: 'bold',
  marginTop: '30px',
  padding: '10px',
};
