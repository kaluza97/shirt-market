import { FC } from 'react';
import { Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { carouselItems } from '@/data/carouselData';
import { carouselContainer, carouselDescriptionText, carouselNameText } from './Carousel.styles';


export const SliderCarousel: FC = () => {

  return (
    <Carousel indicatorIconButtonProps={{ style: { display: 'none' } }}>
      {
        carouselItems.map(({ name, description }) => (
          <Paper key={name} sx={carouselContainer}>
            <Typography sx={carouselNameText}>{name}</Typography>
            <Typography sx={carouselDescriptionText}>{description}</Typography>
          </Paper>
        ))
      }
    </Carousel>
  );
};
