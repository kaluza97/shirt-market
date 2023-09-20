import styled from '@emotion/styled';
import { SxProps } from '@mui/material';

export const OrderContainer = styled.div`
  padding: 0 1rem;
`;

export const OrderItemsContainer = styled.div`
  display: flex;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
`;

export const orderBox: SxProps = {
  margin: '0.5rem',
  padding: '1rem',
};
