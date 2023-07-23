import { FC } from 'react';
import { CircularProgress } from '@mui/material';
import { circularLoading } from './CircularLoading.styles';


export const CircularLoading: FC = () => {

  return (
    <CircularProgress sx={circularLoading} />
  );
};
