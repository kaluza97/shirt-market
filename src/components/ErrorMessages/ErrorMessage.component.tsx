import React, { FC, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import {
  errorText,
  ErrorMessageContainer,
} from '@/components/ErrorMessages/Error.styles';

type Props = {
  errorMessage?: Error;
  time?: number;
};

export const ErrorMessage: FC<Props> = ({ errorMessage, time = 5000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setIsVisible(true);

      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, time);

      return () => clearTimeout(timeout);
    }
  }, [errorMessage, time]);

  return isVisible && errorMessage ? (
    <ErrorMessageContainer isVisible={isVisible}>
      <Typography sx={errorText}>{`Error: ${errorMessage}`}</Typography>
    </ErrorMessageContainer>
  ) : null;
};
