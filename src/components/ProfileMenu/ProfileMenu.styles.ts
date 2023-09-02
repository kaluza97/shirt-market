import { Colors, FontFamily, FontSizes } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import Image from 'next/image';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled(Image)`
  margin-right: 1rem;
`;

export const listContainer: SxProps = {
  backgroundColor: Colors.secondary,
  color: Colors.blackLight,
};

export const listLogoutContainer: SxProps = {
  backgroundColor: Colors.primary,
  color: Colors.white,
};

export const listItemText: SxProps = {
  fontFamily: FontFamily.sans,
  fontSize: FontSizes.large,
};
