import { Colors, FontSizes, FontWeights } from '@/styles/variables';
import styled from '@emotion/styled';
import Link from 'next/link';


export const TermsContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${Colors.blackLight};
  font-size: ${FontSizes.middle};
`;

export const LinkStyled = styled(Link)`
  margin-left: 0.5rem;
  font-weight: ${FontWeights.bold};
  text-decoration: underline;
  color: ${Colors.blackLight};
  &:hover {
    cursor: pointer;
  }
`;
