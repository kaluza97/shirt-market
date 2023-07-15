import styled from '@emotion/styled';
import { Colors } from '@/styles/variables';
import { SxProps } from '@mui/material';

export const AuthContainer = styled.div`
  height: 100vh;
`;

export const FormContent = styled.div`
  text-align: center;
  height: 100%;
  padding: 10px 30px;
`;

export const TabPanel: SxProps = {
  boxShadow: `0 4px 4px -2px ${Colors.shadow}`,
  marginBottom: '30px',
};
