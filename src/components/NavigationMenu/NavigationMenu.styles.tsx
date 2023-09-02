import { Colors } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';

export const NavigationContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
