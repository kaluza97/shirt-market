import { Colors, ZIndexes } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';

export const GapContainer = styled.div`
  width: 100%;
  z-index: ${ZIndexes.background};
  height: 7rem;
`;

export const NavigationContainer = styled.div`
  position: fixed;
  background-color: ${Colors.white};
  width: 100%;
  z-index: ${ZIndexes.menu};
`;

export const Navigation = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

export const IconContainer = styled.div`
  margin-top: 0.5rem;
  margin-right: 2rem;
`;

export const menuIcon: SxProps = {
  width: '2.5rem',
  height: '2.5rem',
  color: Colors.primaryDark,
  marginRight: '0.5rem',
};
