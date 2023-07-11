import styled from '@emotion/styled';
import Link from 'next/link';
import { SignOut } from '@/components/SignOut/SignOut';

const Paragraph = styled.p`
  font-size: 30px;
  color: blue;
`;

const Home = () => {
  return (
    <div>
      <Paragraph>Hello, Emotion!</Paragraph>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <SignOut />
    </div>
  );
};

export default Home;
