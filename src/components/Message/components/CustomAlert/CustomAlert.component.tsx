import { FC } from 'react';
import { Alert, Typography } from '@mui/material';
import { AlertProps } from '@/components/Message/components/CustomAlert/CustomAlert.types';
import {
  alertTextBlack,
  alertTextWhite,
} from '@/components/Message/Message.styles';

export const CustomAlert: FC<AlertProps> = ({
  isVisible = true,
  alertMessage,
  alertType,
}) => (
  <>
    {isVisible && (
      <Alert variant="filled" severity={alertType}>
        <Typography
          component="h3"
          sx={alertType === 'warning' ? alertTextBlack : alertTextWhite}
        >
          {alertMessage}
        </Typography>
      </Alert>
    )}
  </>
);
