import { Colors, FontFamily, FontSizes, FontWeights } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import Image from 'next/image';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled(Image)`
  margin-right: 1rem;
`;

export const logoText: SxProps = {
  fontFamily: `${FontFamily.logoText}`,
  fontSize: `${FontSizes.large}`,
  color: `${Colors.text}`,
  fontWeight: `${FontWeights.bold}`,
};
