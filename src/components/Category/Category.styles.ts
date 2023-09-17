import { FontFamily, FontSizes, FontWeights } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const button: SxProps = {
  width: '100%',
  textAlign: 'center',
  fontSize: FontSizes.large,
  fontFamily: FontFamily.sans,
  fontWeight: FontWeights.bold,
};
