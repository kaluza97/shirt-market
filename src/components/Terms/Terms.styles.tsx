import { Colors, FontSizes } from '@/styles/variables';
import styled from '@emotion/styled';

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${Colors.text};
  font-size: ${FontSizes.middle};
`;

export const Link = styled.a`
  margin-left: 0.5rem;
  font-weight: bold;
  text-decoration: underline;
  color: ${Colors.text};
  &:hover {
    cursor: pointer;
  }
`;
