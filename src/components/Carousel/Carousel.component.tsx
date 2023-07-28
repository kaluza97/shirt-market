import { FC } from 'react';
import { Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { carouselData } from '@/data/carouselData';
import {
  LinkStyled,
  carouselContainer,
  carouselDescriptionText,
  carouselNameText,
} from './Carousel.styles';

export const SliderCarousel: FC = () => {
  return (
    <Carousel indicatorIconButtonProps={{ style: { display: 'none' } }}>
      {carouselData.map(({ name, description, link }) => (
        <Paper key={name} sx={carouselContainer}>
          <Typography sx={carouselNameText}>{name}</Typography>
          <Typography sx={carouselDescriptionText}>{description}</Typography>
          {link && <LinkStyled href="/about">Check offer!</LinkStyled>}
        </Paper>
      ))}
    </Carousel>
  );
};
