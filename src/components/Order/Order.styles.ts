import { Colors, FontFamily, FontSizes, FontWeights } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';

export const OrderContainer = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
`;

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

export const headerTitle: SxProps = {
  fontFamily: FontFamily.sans,
  fontWeight: FontWeights.bold,
  color: Colors.blackLight,
  margin: '1rem',
  textAlign: 'center',
};

export const descriptionText: SxProps = {
  fontSize: FontSizes.middle,
  fontWeight: FontWeights.thin,
};
