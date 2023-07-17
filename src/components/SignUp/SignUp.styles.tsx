import { Colors } from '@/styles/variables';
import styled from '@emotion/styled';

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${Colors.text};
`;

export const Link = styled.a`
  margin-left: 5px;
  font-weight: bold;
  text-decoration: underline;
  color: ${Colors.text};
  &:hover {
    cursor: pointer;
  }
`;
