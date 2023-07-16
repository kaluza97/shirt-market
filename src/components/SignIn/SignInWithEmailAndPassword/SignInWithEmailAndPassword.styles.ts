import { Colors, FontFamily, FontSizes, ResetAutofill } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/system';

export const InputText: SxProps = {
  paddingTop: '5px',
  marginBottom: '20px',
  color: `${Colors.text}`,
  'input:-webkit-autofill': {
    WebkitBoxShadow: ResetAutofill,
  },
};

export const Paragraph: SxProps = {
  fontSize: `${FontSizes.middle}`,
  textAlign: 'left',
  fontWeight: 'bold',
  color: `${Colors.text}`,
};

export const SubmitButton: SxProps = {
  fontSize: `${FontSizes.small}`,
  color: `${Colors.white}`,
  fontWeight: 'bold',
  marginTop: '30px',
  padding: '10px',
};

interface ErrorMessageInterface {
  isVisible: boolean;
}

export const ErrorMessageWrapper = styled.div<ErrorMessageInterface>`
  margin-top: 16px;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

export const ErrorMessage: SxProps = {
  textAlign: 'center',
  fontFamily: `${FontFamily.main}`,
  fontSize: `${FontSizes.middle}`,
  color: `${Colors.red}`,

};
