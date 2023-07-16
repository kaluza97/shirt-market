import styled from '@emotion/styled';
import { Colors, FontFamily, FontSizes } from '@/styles/variables';
import { SxProps } from '@mui/material';

interface ErrorMessageInterface {
  isVisible: boolean;
};

export const ErrorMessageContainer = styled.div<ErrorMessageInterface>`
  margin-top: 16px;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

export const ErrorMessage: SxProps = {
  textAlign: 'center',
  fontFamily: `${FontFamily.main}`,
  fontSize: `${FontSizes.middle}`,
  color: `${Colors.red}`,
};