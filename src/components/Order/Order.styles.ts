import styled from '@emotion/styled';
import { SxProps } from '@mui/material';

export const OrderItemsContainer = styled.div`
  display: flex;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  margin-left: 2rem;
`;

export const orderBox: SxProps = {
  margin: '0.5rem',
  padding: '1rem',
};
