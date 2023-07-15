import { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu.component';

const About: FC = () => {
  return <Layout header={<NavigationMenu />} content={<div>About</div>} />;
};

export default About;
