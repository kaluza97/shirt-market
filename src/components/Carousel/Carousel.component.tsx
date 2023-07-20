import { FC } from 'react';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { carouselItems } from '@/data/carouselData';
import Image from 'next/image';

export const SliderCarousel: FC = () => {

  return (
    <Carousel>
      {
        carouselItems.map(({ name, description }) => (
          <Paper key={name} sx={{ height: '80vh' }}>
            <h2>{name}</h2>
            <p>{description}</p>
            <Image
              src={`/assets/model.jpg`}
              alt='hahah'
              fill
            />
            <Button className="CheckButton">
              Check it out!
            </Button>
          </Paper>
        ))
      }
    </Carousel>
  );
};
