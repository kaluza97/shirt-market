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

const text: SxProps = {
  textAlign: 'center',
  fontFamily: FontFamily.sans,
  fontSize: FontSizes.middle,
};

export const errorText: SxProps = {
  ...text,
  color: Colors.red,
};

export const alertTextBlack: SxProps = {
  ...text,
  color: Colors.black,
};

export const alertTextWhite: SxProps = {
  ...text,
  color: Colors.white,
};
