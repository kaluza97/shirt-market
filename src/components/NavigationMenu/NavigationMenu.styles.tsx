import { Colors, FontSizes } from '@/styles/variables';
import styled from '@emotion/styled';
import Link from 'next/link';

export const NavigationMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${Colors.primary};
  padding: 10px;
`;

export const LinkMenu = styled(Link)`
  font-size: ${FontSizes.large};
  padding: 10px;
`;
