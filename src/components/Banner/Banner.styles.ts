import { Breakpoints } from '@/styles/variables';
import styled from '@emotion/styled';
import Image from 'next/image';

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: 'row';
`;

export const BannerContainer = styled.div`
  display: flex;
  height: 600px;
  min-width: 50%;
`;

export const Img = styled(Image)`
  object-fit: contain;
`;
