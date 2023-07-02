import styled from '@emotion/styled';
import Link from 'next/link'

const Paragraph = styled.p`
  font-size: 30px;
  color: blue;
`;

export default function Home() {
  return (
    <div >
      <Paragraph>Hello, Emotion!</Paragraph>
      <li>
        <Link href="/about">About Us</Link>
      </li>
    </div>
  );
}