import { FC } from 'react';
import { Banner } from '@/components/Banner/Banner.component';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { ProductsWrapper } from '@/components/Products/components/ProductsWrapper/ProductsWrapper.component';
import { SliderCarousel } from '@/components/Carousel/Carousel.component';
import { Footer } from '@/components/Footer/Footer.component';

const Home: FC = () => (
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

export default Home;
