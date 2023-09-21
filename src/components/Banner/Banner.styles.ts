import { Breakpoints } from '@/styles/variables';
import styled from '@emotion/styled';
import Image from 'next/image';

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

export const Img = styled(Image)`
margin: 0 0 1rem 0;
object-fit: contain;
cursor: pointer;
@media (min-width: ${Breakpoints.desktop}) {
  margin: 2rem 1rem;
`;
