import { FC } from 'react';
import { CircularProgress } from '@mui/material';
import { circularLoading } from './CircularLoading.styles';

type Props = {
  fetchingData?: boolean;
};

export const CircularLoading: FC<Props> = (fetchingData) => {
  return <>{!fetchingData && <CircularProgress sx={circularLoading} />}</>;
};
