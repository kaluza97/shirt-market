import { FC } from 'react';
import { Alert, Typography } from '@mui/material';

interface WarningProps {
  visibleProp: boolean;
  alertMessage: string;
}

export const Warning: FC<WarningProps> = ({ visibleProp, alertMessage }) => {
  return (
    <>
      {visibleProp && (
        <Alert variant="filled" severity="warning">
          <Typography component="h3">{alertMessage}</Typography>
        </Alert>
      )}
    </>
  );
};
