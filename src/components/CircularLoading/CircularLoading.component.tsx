import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { circularLoading } from './CircularLoading.styles';


export const CircularLoading: FC = () => {

  return (
    <Box sx={circularLoading}>
      <CircularProgress />
    </Box>
  );
};
