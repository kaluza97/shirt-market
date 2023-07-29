import { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { ProfileList } from '@/components/ProfileList/ProfileList.component';

const Profile: FC = () => {
  return <Layout header={<NavigationMenu />} content={<div><ProfileList /></div>} />;
};

export default Profile;
