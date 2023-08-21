import { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { ProfileMenu } from '@/components/ProfileMenu/ProfileMenu.component';

const Profile: FC = () => {
  return (
    <Layout
      header={<NavigationMenu />}
      content={
        <div>
          <ProfileMenu />
        </div>
      }
    />
  );
};

export default Profile;
