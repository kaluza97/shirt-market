import { Breakpoints } from '@/styles/variables';
import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: no-wrap;
  @media (min-width: ${Breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 40rem;
  height: 60rem;
  margin: 0 1rem 2rem 1rem;
  @media (min-width: ${Breakpoints.desktop}) {
    margin: 2rem 1rem 2rem 1rem;
  }
`;
