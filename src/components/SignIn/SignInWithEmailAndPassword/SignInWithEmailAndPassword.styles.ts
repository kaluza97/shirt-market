import { Colors, FontSizes, ResetAutofill } from '@/styles/variables';
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
