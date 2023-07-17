import { FC, useContext } from 'react';
import { Typography } from '@mui/material';
import { AuthContext } from '@/context/AuthContext';
import { ErrorText, ErrorMessageContainer } from './AuthError.styles';

export const AuthError: FC = () => {
  const { authError } = useContext(AuthContext);

  return (
    <ErrorMessageContainer isVisible={!!authError.code}>
      <Typography sx={ErrorText}>{`Error: ${authError.code}`}</Typography>
    </ErrorMessageContainer>
  );
};
