import React, { FC, useContext, useEffect } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Favorites } from '@/components/Favorites/Favorites.component';
import { useDispatch } from '@/redux/hooks';
import { AuthContext } from '@/context/Auth.context';
import { fetchFavorites } from '@/redux/slices/Favorites/Favorites.thunk';
import { Footer } from '@/components/Footer/Footer.component';

const FavoritesPage: FC = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchFavorites(user.uid));
    }
  });

  return (
    <Layout
      header={<NavigationMenu />}
      content={<Favorites />}
      footer={<Footer />}
    />
  );
};

export default FavoritesPage;
