import { ReactNode } from 'react';

type Props = {
  header: ReactNode;
  content: ReactNode;
};

export const Layout = ({ header, content }: Props) => {
  return (
    <>
      {header}
      {content}
    </>
  );
};
