import { FC, useContext } from 'react';
import { Typography } from '@mui/material';
import { AuthContext } from '@/context/Auth.context';
import {
  errorText,
  ErrorMessageContainer,
} from '@/components/Message/Message.styles';

export const AuthError: FC = () => {
  const { authError } = useContext(AuthContext);

  return (
    <ErrorMessageContainer isVisible={!!authError.code}>
      <Typography sx={errorText}>{`Error: ${authError.code}`}</Typography>
    </ErrorMessageContainer>
  );
};
