import { Colors, FontFamily, FontSizes, FontWeights } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import Link from 'next/link';

export const LinkStyled = styled(Link)`
  font-size: ${FontSizes.small};
  font-family: ${FontFamily.sans};
  color: ${Colors.white};
  text-decoration: underline;
`;

export const carousel: SxProps = {
  margin: '0',
  backgroundColor: Colors.blackLight,
  maxHeight: '9rem',
};

export const carouselContent: SxProps = {
  textAlign: 'center',
  backgroundColor: Colors.primaryDark,
  color: Colors.white,
  padding: '1rem',
  height: '7rem',
  borderRadius: '0',
};

export const carouselNameText: SxProps = {
  fontSize: FontSizes.large,
  fontWeight: FontWeights.bold,
};

export const carouselDescriptionText: SxProps = {
  fontSize: FontSizes.small,
  fontFamily: FontFamily.sans,
};
