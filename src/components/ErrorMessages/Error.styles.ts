import styled from '@emotion/styled';
import { Colors, FontFamily, FontSizes } from '@/styles/variables';
import { SxProps } from '@mui/material';

interface ErrorMessageInterface {
  isVisible: boolean;
}

export const ErrorMessageContainer = styled.div<ErrorMessageInterface>`
  margin-top: 1.6rem;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

export const errorText: SxProps = {
  textAlign: 'center',
  fontFamily: `${FontFamily.sans}`,
  fontSize: `${FontSizes.middle}`,
  color: `${Colors.red}`,
};
