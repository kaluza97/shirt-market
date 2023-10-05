import styled from '@emotion/styled';
import { Colors } from '@/styles/variables';

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
  justify-content: space-evenly;
`;
