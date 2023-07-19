import styled from '@emotion/styled';
import { Breakpoints, Colors, FontFamily, FontSizes } from '@/styles/variables';
import { SxProps } from '@mui/material';

export const DesktopContainer = styled.div`
  display: none;
  @media (min-width: ${Breakpoints.desktop}) {
    display: flex;
    width: 60vw;
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
    margin-top: 2rem;
  }
`;

export const textDescription: SxProps = {
  fontSize: `${FontSizes.middle}`,
  fontFamily: `${FontFamily.main}`,
  color: `${Colors.text}`,
  margin: '0 5rem',
};
