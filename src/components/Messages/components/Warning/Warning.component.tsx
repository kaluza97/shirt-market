import { FC } from 'react';
import { Alert, Typography } from '@mui/material';
import { WarningProps } from '@/components/Messages/components/Warning/Warning.types';

export const Warning: FC<WarningProps> = ({ visibleProp, alertMessage }) => (
  <>
    {visibleProp && (
      <Alert variant="filled" severity="warning">
        <Typography component="h3">{alertMessage}</Typography>
      </Alert>
    )}
  </>
);
