import { ReactNode } from 'react';

export interface LayoutProps {
  header: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
}
