import styled from '@emotion/styled';
import { Colors } from '@/styles/variables';
import Image from 'next/image';

export const FormWrapper = styled.div`
margin-left:auto;
margin-right:auto;  
width: 300px;
  height: 100%;
  padding: 50px;
  border: 1px solid ${Colors.primary};
  box-shadow: ${Colors.primary} 0px 5px 30px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  `;

export const ErrorMessageWrapper = styled.div`
margin-top: 16px;
`;

export const Img = styled(Image)`
  pointer-events: none;
`;
