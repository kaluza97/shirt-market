import { Colors } from '@/styles/variables';
import styled from '@emotion/styled';
import Link from 'next/link';

export const NavigationMenuWrapper = styled.div`
display: flex;
flex-direction: row;
background-color: ${Colors.primary};
padding: 10px;
  `;

export const LinkMenu = styled(Link)`
  font-size: 30px;
  padding: 10px;
  `;