import { FC } from 'react';
import { SignOut } from '@/components/SignOut/SignOut.component';
import { Layout } from '@/components/Layout/Layout.component';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu.component';

const Home: FC = () => {
  return (
    <Layout
      header={<NavigationMenu />}
      content={<SignOut />}
    />

  );
};

export default Home;
