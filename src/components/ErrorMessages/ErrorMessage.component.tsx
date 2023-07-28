import { FC } from 'react';
import { Typography } from '@mui/material';
import {
  errorText,
  ErrorMessageContainer,
} from '@/components/ErrorMessages/Error.styles';

type Props = {
  errorMessage: string | undefined;
};

export const ErrorMessage: FC<Props> = (errorMessage) => {
  return (
    <ErrorMessageContainer isVisible={!!errorMessage.errorMessage}>
      <Typography
        sx={errorText}
      >{`Error: ${errorMessage.errorMessage}`}</Typography>
    </ErrorMessageContainer>
  );
};
