import styled from '@emotion/styled';

const Paragraph = styled.p`
  font-size: 30px;
  color: blue;
`;

export default function Home() {
  return (
    <div >
      <Paragraph>Hello, Emotion!</Paragraph>
    </div>
  );
}