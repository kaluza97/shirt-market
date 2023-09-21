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
  @media (min-width: ${Breakpoints.tablet}) {
    flex-direction: column;
  }
  @media (min-width: ${Breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const Img = styled(Image)`
margin-bottom: 1rem;
object-fit: contain;
cursor: pointer;
@media (min-width: ${Breakpoints.desktop}) {
  margin: 2rem 1rem 2rem 1rem;
`;