import { FC } from 'react';
import { Banner } from '@/components/Banner/Banner.component';
import { Layout } from '@/components/Layout/Layout.component';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { ProductsWrapper } from '@/components/Products/components/ProductsWrapper/ProductsWrapper.component';
import { SliderCarousel } from '@/components/Carousel/Carousel.component';
import { ExtendedFooter } from '@/components/Footer/components/ExtendedFooter/ExtendedFooter.component';

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
    footer={<ExtendedFooter />}
  />
);

export default Home;
