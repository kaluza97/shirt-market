import styled from '@emotion/styled';
import { Breakpoints, Colors } from '@/styles/variables';
import Link from 'next/link';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${Colors.primary};
  @media (min-width: ${Breakpoints.tablet}),
    @media (min-width: ${Breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const Border = styled.div`
  border-top: 0.1rem solid ${Colors.white};
  padding-top: 2rem;
`;

export const LinkStyled = styled(Link)`
  text-align: center;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const Svg = styled.svg`
  position: relative;
  top: 0.5rem;
  fill: ${Colors.primary};
  @media (min-width: ${Breakpoints.tablet}) {
    display: none;
  }
`;
