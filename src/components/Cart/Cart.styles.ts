import styled from '@emotion/styled';
import { Colors, FontFamily, FontSizes, FontWeights } from '@/styles/variables';
import { SxProps } from '@mui/material';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  padding: 1rem;
  box-shadow: ${Colors.shadow} 0px 1rem 1rem -1rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const EmptyCartContainer = styled(DescriptionContainer)`
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled(DescriptionContainer)`
  flex-direction: space-evently;
`;

export const cartButton: SxProps = {
  fontFamily: FontFamily.sans,
  fontSize: FontSizes.extraSmall,
  fontWeight: FontWeights.bold,
  color: Colors.white,
  padding: '0.5rem',
  marginBottom: '2rem',
};

export const confirmButton: SxProps = {
  fontFamily: FontFamily.sans,
  fontSize: FontSizes.small,
  fontWeight: FontWeights.bold,
  color: Colors.white,
  padding: '1rem',
};

export const descriptionText: SxProps = {
  fontSize: FontSizes.small,
  fontWeight: FontWeights.bold,
  fontFamily: FontFamily.sans,
  color: Colors.blackLight,
};

export const headerText: SxProps = {
  fontSize: FontSizes.large,
  fontFamily: FontFamily.sans,
  color: Colors.blackLight,
  textAlign: 'center',
  margin: '1rem',
};
