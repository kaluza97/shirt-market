import styled from '@emotion/styled';
import { Breakpoints, Colors, FontFamily } from '@/styles/variables';
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
    padding: 50px 50px 0 50px;
  }
`;

export const DesktopDescriptionItem = styled.div`
  display: none;
  @media (min-width: ${Breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 200px;
  }
`;

export const TextDescription: SxProps = {
  fontFamily: `${FontFamily.main}`,
  color: `${Colors.text}`,
  margin: '0 50px',
};
