import React, { FC, useContext, useEffect } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { FavoritesWrapper } from '@/components/Favorites/FavoritesWrapper.component';
import { useDispatch } from '@/redux/hooks';
import { AuthContext } from '@/context/Auth.context';
import { fetchFavorites } from '@/redux/slices/Favorites/Favorites.thunk';

const FavoritesPage: FC = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchFavorites(user.uid));
    }
  });

  return <Layout header={<NavigationMenu />} content={<FavoritesWrapper />} />;
};

export default FavoritesPage;
