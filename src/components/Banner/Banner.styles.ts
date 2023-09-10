import { Breakpoints } from '@/styles/variables';
import styled from '@emotion/styled';

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: 'row';
`;

export const BannerContainer = styled.div`
  display: flex;
  height: 600px;
  min-width: 50%;
  @media (min-width: ${Breakpoints.tablet}) {
  }
  @media (min-width: ${Breakpoints.desktop}) {
  }
`;
