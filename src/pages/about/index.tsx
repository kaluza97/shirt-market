import { FC } from 'react';
import { Layout } from '@/components/Layout/Layout';

const About: FC = () => {
  return (
    <Layout header={<div>MenuNavigation</div>} content={<div>About</div>} />
  );
};

export default About;
