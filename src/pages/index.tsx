import { FC } from 'react';
import { Layout } from '@/components/Layout/Layout.component';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu.component';
import { SliderCarousel } from '@/components/Carousel/Carousel.component';

const Home: FC = () => {

  return <Layout header={<NavigationMenu />} content={<>
    {/* <SliderCarousel /> */}

  </>} />;
};

export default Home;
