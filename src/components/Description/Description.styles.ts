import styled from '@emotion/styled';
import { Breakpoints, Colors, FontFamily, FontSizes } from '@/styles/variables';
import { SxProps } from '@mui/material';
import Image from 'next/image';

export const DesktopContainer = styled.div`
  display: none;
  @media (min-width: ${Breakpoints.desktop}) {
    display: flex;
  }
`;

export const DesktopContent = styled.div`
  display: none;
  @media (min-width: ${Breakpoints.desktop}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem 5rem 0 5rem;
  }
`;

export const DesktopDescriptionItem = styled.div`
  display: none;
  @media (min-width: ${Breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 1rem;
    margin-top: 2rem;
  }
`;

export const Img = styled(Image)`
  object-fit: contain;
`;

export const descriptionText: SxProps = {
  fontSize: FontSizes.middle,
  fontFamily: FontFamily.sans,
  color: Colors.blackLight,
  margin: '0 5rem',
};
