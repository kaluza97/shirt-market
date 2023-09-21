import styled from '@emotion/styled';
import { Colors, FontFamily, FontSizes, FontWeights } from '@/styles/variables';
import { SxProps } from '@mui/material';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  padding: 1rem;
  box-shadow: ${Colors.shadow} 0 1rem 1rem -1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const DescriptionContainer = styled(FlexContainer)`
  flex-direction: column;
`;

export const EmptyCartContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled(FlexContainer)`
  display: flex;
  flex-direction: column;
`;

export const cartButton: SxProps = {
  fontFamily: FontFamily.sans,
  fontSize: FontSizes.extraSmall,
  fontWeight: FontWeights.bold,
  color: Colors.white,
  padding: '1rem',
  marginBottom: '2rem',
  height: '4rem',
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
