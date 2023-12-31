import { FC } from 'react';
import { LayoutProps } from '@/components/Layout/Layout.types';

export const Layout: FC<LayoutProps> = ({ header, content, footer }) => (
  <>
    {header}
    {content}
    {footer}
  </>
);
