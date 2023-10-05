import { FC, useContext, useEffect } from 'react';
import { Banner } from '@/components/Banner/Banner.component';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { ProductsWrapper } from '@/components/Products/components/ProductsWrapper/ProductsWrapper.component';
import { SliderCarousel } from '@/components/Carousel/Carousel.component';
import { Footer } from '@/components/Footer/components/Footer/Footer.component';
import { fetchFavorites } from '@/redux/slices/Favorites/Favorites.thunk';
import { useDispatch } from '@/redux/hooks';
import { AuthContext } from '@/context/Auth.context';

const Home: FC = () => {
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
      content={
        <>
          <SliderCarousel />
          <Banner />
          <ProductsWrapper />
        </>
      }
      footer={<Footer />}
    />
  );
};

export default Home;
