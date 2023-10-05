import styled from '@emotion/styled';
import Image from 'next/image';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled(Image)`
  margin-right: 1rem;
`;
