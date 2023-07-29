import { FC } from 'react';
import { HomeBanner } from '@/components/Banners/HomeBanner.component';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { ProductsWrapper } from '@/components/Products/ProductsWrapper.component';
import { SliderCarousel } from '@/components/Carousel/Carousel.component';

const Home: FC = () => (
  <Layout
    header={<NavigationMenu />}
    content={
      <>
        <SliderCarousel />
        <ProductsWrapper />
        <HomeBanner />
      </>
    }
  />
);

export default Home;
