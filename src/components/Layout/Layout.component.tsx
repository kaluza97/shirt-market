import { FC, ReactNode } from 'react';

type Props = {
  header: ReactNode;
  content: ReactNode;
};

export const Layout: FC<Props> = ({ header, content }) => (
  <>
    {header}
    {content}
  </>
);
