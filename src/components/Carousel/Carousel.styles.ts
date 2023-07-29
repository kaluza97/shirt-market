import { Colors, FontFamily, FontSizes, FontWeights } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import Link from 'next/link';

export const carousel: SxProps = {
  borderRadius: '0',
};

export const LinkStyled = styled(Link)`
  font-size: ${FontSizes.small};
  font-family: ${FontFamily.main};
  color: ${Colors.primary};
`;

export const carouselContainer: SxProps = {};

export const carouselContent: SxProps = {
  textAlign: 'center',
  backgroundColor: Colors.secondary,
  color: Colors.text,
  padding: '1rem',
  height: '8rem',
  borderRadius: '0',
};

export const carouselNameText: SxProps = {
  fontSize: FontSizes.large,
  fontWeight: `${FontWeights.bold}`,
  marginBottom: '0.5rem',
};

export const carouselDescriptionText: SxProps = {
  fontSize: FontSizes.small,
  fontFamily: FontFamily.main,
  marginBottom: '0.5rem',
};
